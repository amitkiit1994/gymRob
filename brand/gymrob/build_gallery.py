#!/usr/bin/env python3
"""Assemble BRANDSCAPE · GYMROB — the merch gift-set gallery. Inlines locked logo SVGs."""
import os
D = os.path.dirname(__file__)
LOGO = os.path.join(D, "logo")
OUT = os.path.join(D, "gallery", "brandscape.html")

def svg(n):
    with open(os.path.join(LOGO, n), encoding="utf-8") as f:
        return f.read()

T = open(os.path.join(D, "gallery", "_template.html"), encoding="utf-8").read()
repl = {
    "%%EMBLEM%%": svg("emblem.svg"),
    "%%EMBLEMMONO%%": svg("emblem-mono.svg"),
    "%%ICON%%": svg("icon-gr.svg"),
    "%%ICONMONO%%": svg("icon-gr-mono.svg"),
    "%%WORDMARK%%": svg("wordmark.svg"),
    "%%LOCKUP%%": svg("lockup-horizontal.svg"),
    "%%BANNER%%": svg("banner.svg"),
    "%%FIST%%": svg("fist.svg"),
    "%%FAVICON%%": svg("favicon.svg"),
}
for k, v in repl.items():
    T = T.replace(k, v)
with open(OUT, "w", encoding="utf-8") as f:
    f.write(T)
print("wrote", OUT, len(T), "bytes")
