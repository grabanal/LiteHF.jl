var documenterSearchIndex = {"docs":
[{"location":"#LiteHF.jl","page":"LiteHF.jl","title":"LiteHF.jl","text":"","category":"section"},{"location":"","page":"LiteHF.jl","title":"LiteHF.jl","text":"Documentation for LiteHF.jl","category":"page"},{"location":"","page":"LiteHF.jl","title":"LiteHF.jl","text":"Modules = [LiteHF]\nOrder   = [:type, :function]","category":"page"},{"location":"#LiteHF.FlatPrior","page":"LiteHF.jl","title":"LiteHF.FlatPrior","text":"Pseudo flat prior in the sense that `logpdf()` always evaluates to zero,\nbut `rand()`, `minimum()`, and `maximum()` behaves like `Uniform(a, b)`.\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Histosys","page":"LiteHF.jl","title":"LiteHF.Histosys","text":"Histosys is defined by two vectors represending bin counts\nin `hi_data` and `lo_data`\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Lumi","page":"LiteHF.jl","title":"LiteHF.Lumi","text":"Luminosity doesn't need interpolation, σ is provided at modifier construction time.\nIn `pyhf` JSON, this  information lives in the \"Measurement\" section, usually near the end of\nthe JSON file.\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Normfactor","page":"LiteHF.jl","title":"LiteHF.Normfactor","text":"Normfactor is unconstrained, so `interp` is just identity.\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Normsys-Tuple{Number, Number}","page":"LiteHF.jl","title":"LiteHF.Normsys","text":"Normsys is defined by two multiplicative scalars\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.Shapefactor","page":"LiteHF.jl","title":"LiteHF.Shapefactor","text":"Shapefactor is unconstrained, so `interp` is just identity. Unlike `Normfactor`,\nthis is per-bin\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Shapesys","page":"LiteHF.jl","title":"LiteHF.Shapesys","text":"Shapesys doesn't need interpolation, similar to `Staterror`\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.Staterror","page":"LiteHF.jl","title":"LiteHF.Staterror","text":"Staterror doesn't need interpolation, but it's a per-bin modifier.\nInformation regarding which bin is the target is recorded in `bintwoidentity`.\n\nThe `δ` is the absolute yield uncertainty in each bin, and the relative uncertainty:\n`δ` / nominal is taken to be the `σ` of the prior, i.e. `α ~ Normal(1, δ/nominal)`\n\n\n\n\n\n","category":"type"},{"location":"#LiteHF.build_channel-Tuple{Any}","page":"LiteHF.jl","title":"LiteHF.build_channel","text":"build_channel(rawjdict[:channels][1][:samples][2]) =>\nDict{String, ExpCounts}\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.build_modifier!-Tuple{Any, Any}","page":"LiteHF.jl","title":"LiteHF.build_modifier!","text":"build_modifier(rawjdict[:channels][1][:samples][2][:modifiers][1]) =>\n<:AbstractModifier\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.build_modifier-Union{Tuple{T}, Tuple{Any, Type{T}}} where T","page":"LiteHF.jl","title":"LiteHF.build_modifier","text":"build_modifier(...[:modifiers][1][:data], Type) =>\n<:AbstractModifier\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.build_pyhf-Tuple{Any}","page":"LiteHF.jl","title":"LiteHF.build_pyhf","text":"build_pyhf(load_pyhfjson(path)) \n    -> expected::Function, priors::NamedTupleDist, priornames::Tuple{Symbol}\n\nthe `expected(αs)` is a function that takes vector or tuple of length `N`, where `N` is also the\nlength of `priors` and `priornames`. In other words, the three objects returned\nare aligned.\n\nThe output of `forward_model()` is always a vector of length `N`, represending the expected\nbin counts when all parameters (`αs`) taking a set of specific values.\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.build_sample","page":"LiteHF.jl","title":"LiteHF.build_sample","text":"build_sample(rawjdict[:channels][1][:samples][2]) =>\nExpCounts\n\n\n\n\n\n","category":"function"},{"location":"#LiteHF.load_pyhfjson-Tuple{Any}","page":"LiteHF.jl","title":"LiteHF.load_pyhfjson","text":"load_pyhfjson(path)\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.pyhf_loglikelihoodof-Tuple{Any, Any, Any}","page":"LiteHF.jl","title":"LiteHF.pyhf_loglikelihoodof","text":"pyhf_loglikelihoodof(expected, obs, priors)\nReturn a callable Function that would calculate the log likelihood\n\n!!! note\n    The \"constraint\" terms that come from prior IS included here.\n\n`FlatPrior` prior shouldn't have contribution to constraint\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.pyhf_loglikelihoodof-Tuple{Any, Any}","page":"LiteHF.jl","title":"LiteHF.pyhf_loglikelihoodof","text":"pyhf_loglikelihoodof(expected, obs)\nReturn a callable Function that would calculate the log likelihood\n\n!!! note\n    The \"constraint\" terms that come from prior is NOT included here.\n\n\n\n\n\n","category":"method"},{"location":"#LiteHF.twoidentity-Tuple{Any, Any}","page":"LiteHF.jl","title":"LiteHF.twoidentity","text":"Identity function that takes two argument. Used for interpolation code that\ndoesn't do any interpolation.\n\n\n\n\n\n","category":"method"}]
}
