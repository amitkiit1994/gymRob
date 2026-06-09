#!/usr/bin/env python3
import os
D = os.path.dirname(__file__)
def rd(p):
    with open(p, encoding="utf-8") as f: return f.read()
# Name-agnostic gym: the eGym wordmark is retired; the iron creed seal is the anchor.
seal  = rd(os.path.join(D, "logo", "iron-seal.svg"))
fist  = rd(os.path.join(D, "..", "gymrob", "logo", "fist.svg"))
T = rd(os.path.join(D, "gallery", "_template.html"))
T = T.replace("%%EWORD%%", seal).replace("%%SEAL%%", seal).replace("%%FIST%%", fist)
out = os.path.join(D, "gallery", "egym-posters.html")
with open(out, "w", encoding="utf-8") as f: f.write(T)
print("wrote", out, len(T), "bytes")
