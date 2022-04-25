using Unrolled

abstract type AbstractModifier end
function _prior end

"""
    Histosys is defined by two vectors represending bin counts
    in `hi_data` and `lo_data`
"""
struct Histosys{T<:AbstractInterp} <: AbstractModifier
    interp::T
    function Histosys(interp::T) where T
        @assert T <: Union{InterpCode0, InterpCode4}
        new{T}(interp)
    end
end
Histosys(up, down) = Histosys(InterpCode0(up, down))
_prior(::Histosys) = Normal()

struct Normsys{T<:AbstractInterp} <: AbstractModifier
    interp::T
end
_prior(::Normsys) = Normal()

"""
    Normsys is defined by two multiplicative scalars
"""
Normsys(up::Number, down::Number) = Normsys(InterpCode1(up, down))
Normsys(nominal, ups, downs) = Normsys(InterpCode1(nominal, ups, downs))

twoidentity(_, α) = α
"""
    Normfactor is unconstrained, so `interp` is just identity.
"""
struct Normfactor <: AbstractModifier # is unconstrained
    interp::typeof(twoidentity)
    Normfactor() = new(twoidentity)
end
_prior(::Normfactor) = Uniform(-10, 10)

"""
    Staterror doesn't need interpolation
"""
struct Staterror <: AbstractModifier
    interp::typeof(twoidentity)
    Staterror() = new(twoidentity)
end

"""
    Luminosity doesn't need interpolation
"""
struct Lumi <: AbstractModifier
    interp::typeof(twoidentity)
    Lumi() = new(twoidentity)
end

"""
    Shapesys doesn't need interpolation
"""
struct Shapesys<: AbstractModifier
    interp::typeof(twoidentity)
    Shapesys() = new(twoidentity)
end

struct ExpCounts{T, M}
    nominal::T
    modifier_names::Vector{String}
    modifiers::M
end

ExpCounts(nominal, names::Vector{String}, modifiers::AbstractVector) = ExpCounts(nominal, names, tuple(modifiers...))

nmodifiers(E::ExpCounts) = length(E.modifiers)

@unroll function _expkernel(modifiers, nominal, αs)
    additive = float(nominal)
    factor = ones(length(additive))
    @unroll for i in 1:length(modifiers)
        @inbounds modifier = modifiers[i]
        @inbounds α = αs[i]
        if modifier isa Histosys
            # additive
            additive += modifier.interp(nominal, α)
        else
            # multiplicative
            factor = factor .* modifier.interp(nominal, α)
        end
    end
    return factor .* additive
end

function (E::ExpCounts)(αs)
    (; modifier_names, modifiers, nominal) = E

    @assert length(modifier_names) == length(αs)
    return _expkernel(modifiers, nominal, αs)
end

for T in (Normsys, Normfactor, Histosys, Staterror, Lumi)
    @eval function Base.show(io::IO, E::$T)
        interp = Base.typename(typeof(E.interp)).name
        print(io, $T, "{$interp}")
    end
end

function Base.show(io::IO, E::ExpCounts)
    modifiers = E.modifiers
    elip = length(modifiers) > 5 ? "...\n" : ""
    println(io, "ExpCounts with $(length(modifiers)) modifiers:")
    for (n, m) in zip(E.modifier_names, modifiers)
        println(io, n=>m)
    end
    print(elip)
end
