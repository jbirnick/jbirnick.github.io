+++
title = 'LaTeX vs. ConTeXt vs. Typst'
description = "I compare three typesetting systems, and I give you advice on which one you should use. (Spoiler: Not LaTeX.)"
keywords = ['typesetting', 'LaTeX', 'ConTeXt', 'Typst', 'LaTeX alternative', 'TeX', 'math', 'mathematics', 'equation']
author = 'Johann Birnick'
categories = ['software']
tags = ['typesetting']
publishDate = 2023-06-21
pdf = false
comments = true
+++

Let's be honest: Nobody really loves LaTeX.

This post shows you some great alternatives and explains how to switch.


## What annoys me about LaTeX


Every document is preceded by a massive preamble, just to put the most basic things into place: correct encoding, margins, header and footer, hyperlinks & referencing, bibliography, better enumerations, the appearance of headings, custom document header, spacing, colors, ...

My former LaTeX math template included 18 packages, just for a basic layout:

```latex
% Encoding

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

% Geometry

\usepackage{geometry} % edit margins of paper
\usepackage{setspace} % edit line spacing
\usepackage{fancyhdr} % header, footer
\usepackage{titlesec} % edit format of titles

% Visual

\usepackage[dvipsnames]{xcolor} % colors
\usepackage{tikz} % graphics
\usepackage[framemethod=tikz]{mdframed} % frames, better theorems

% Math

\usepackage{amsmath} % math tools
\usepackage{amssymb} % math symbols
\usepackage{amsthm} % thereoms
\usepackage{mathtools} % math tools

% Referencing

\usepackage{nameref}
\usepackage{hyperref}
\usepackage{cleveref}

% Useful

\usepackage[shortlabels]{enumitem} % enumerations

% Other

\usepackage{lastpage} % get number of last page
```

And all those packages implement their own way of configuring them.
They are *not compatible*.
I spent days trying to configure the spacing between my theorem boxes and the other things in a consistent way, and it still never really worked out.

It's not hard to note that a typesetting system can be much better, the question is just: What are those alternatives, if they exist?

**Disclaimer.** I don't want to diminish LaTeX, or even TeX. It served as a great typesetting system for decades. It's just time for something new.

## LaTeX Alternatives

There are two major LaTeX competitors: [ConTeXt](https://wiki.contextgarden.net/Main_Page) and [Typst](https://typst.app/).

**ConTeXt** is, from an architectural viewpoint, quite similar to LaTeX.
It's also based on TeX and provides a lot of helpful macros.
For implementing the macros, however, it takes a different approach than LaTeX.

Pretty much everything you need is already shipped with ConTeXt, no need for packages:
all layout aspects, hyperlinks & references, table of contents, colors, ...

Most importantly, you can configure almost *everything*, and there is a *consistent* syntax for doing it.
Generally, while LaTeX is supposed to be written by an author and designed by someone else using a stylesheet (but often not used in this way), ConTeXt intentionally gives the author the freedom to configure and design every detail of the document.

For example, this is how (a part of) my typical ConTeXt math preamble looks like:

```tex
% Layout
\setuppapersize[A4]
\setuplayout[
  topspace=20mm,
  backspace=20mm,
  width=middle,
  height=270mm,
  footerdistance=11mm,
  footer=2mm]

% Spacing
\setupwhitespace[medium]

% Header, Footer
\setuppagenumbering[location=footer,style=\tfx]
\setupheader[state=none]

% Footnotes
\setupnotation[footnote][way=bypage,numberconversion=set 2]

% Interaction
\definecolor[links][x=C08100]
\setupinteraction[state=start, color=links, contrastcolor=links, style=normal]

% Table of Contents
\setuphead[title][incrementnumber=list]
\setupcombinedlist[content][list={chapter,section,title},alternative=c]
\setuplist[chapter,title][style=bold]

% Titles
\setuphead[subsection][number=no]

% Language
\language[en]

% Pictures
\setupexternalfigures[directory={images}]
```

To find out more about ConTeXt, have a look at their website.

**Typst**, on the other hand, can be seen as a complete TeX rewrite with fundamentally new design choices.
It has aspects of a (more modern) programming language.
Normal text can be formatted with Markdown-like syntax.
The math mode syntax is completely new, which makes it much more concise.

Behind the scenes, the compiler is implemented in Rust.
They have also developed other tools, which allow for example a live preview via incremental compilation.
They also have a web platform to (simultaneously) collaborate with others on a document.

Generally, they try to use the latest technologies, standards and design styles.
You can easily use any font you would like, and also different math fonts.

Here is an example of basic Typst code, not really using any "programming":

```typst
= Introduction

This is a little paragraph, and it contains
some _italic_ as well as some *bold* text,
and here is some `monospace` stuff.

If you want to #underline[put a line] under
some text, you can use this implemented function.

The following command makes links underlined.

#show link: underline

This works: #link("https://typst.app/")[Here] is a link.

Lists
- just use the markdown syntax,
- and hence are very easy.

Numbered lists
+ also use this easy syntax,
+ so they are no more difficult.

Extended functionality is provided by the
`list` and `enum` functions.

Here is some $a = 2 b + 1$ inline math.
For centered equations, let's first enable numbering.

#set math.equation(numbering: "(1)")

Now here are some examples:
(note the space at the beginning and at the end)

$ "area" = A = pi r^2 = pi dot "radius"^2 $ <myequation>

$ cal(A) := { x in RR | x "is natural" } $

$ sum_(k=0)^n k
    &= 1 + ... + n \
    &= (n(n+1)) / 2 $

$ mat(
  1, 2, ..., 10;
  2, 2, ..., 10;
  dots.v, dots.v, dots.down, dots.v;
  10, 10, ..., 10;
) $

You perhaps noted that I labeled @myequation,
and now you saw how I can refer to it.
```

This can be compiled either on their web platform or via `typst compile typst-preview.typ`.
You can find the resulting PDF [here](typst-preview.pdf).

## Comparison

{{< raw >}}<img src="logo_latex.svg" class="floatright" style="height: 2rem; margin-top: 0.5rem;">{{< /raw >}}

### LaTeX

Pros:
- many people still use it

Cons:
- hard to configure it
- some basic things are extremely hard or impossible to build
- incompatible packages

{{< raw >}}<img src="logo_context.svg" class="floatright" style="height: 2rem; margin-top: 0.5rem;">{{< /raw >}}

### ConTeXt

Pros:
- everything you probably need is included, no need for packages
- can configure almost everything
- and configure it in a consistent way
- if you have a question, you can ask it on the mailing list, and literally the developer of the system will answer it

Cons:
- has a few little bugs (and in some discussions, one gets the impression that it's not implemented completely clean, but that might be due to the TeX basis)

{{< raw >}}<img src="logo_typst.svg" class="floatright" style="height: 2.5rem; margin-top: 0.5rem;">{{< /raw >}}

### Typst

Pros:
- can build own constructions, as it is much closer to an actual programming language than TeX
- better syntax for math mode
- new, clean implementation and a young team eager to build a great system
- has a collaborative online platform

Cons:
- some in the TeX world rather basic features are not yet implemented

## Isn't it hard to switch?

For **ConteXt**, it's not hard at all.
As it is based on TeX, the syntax is *very* similar to LaTeX.
Most importantly, the math mode syntax is exactly the same.
Also, you can continue to use TikZ and other LaTeX packages, so even graphics shouldn't be a problem.
So you can switch basically instantly, instructions are on their website.
If you don't know how you can achieve a particular result, just ask on their mailing list.

For **Typst**, the syntax *is* different, so switching takes a bit longer.
But, usually, the syntax is *better*, so you will be happy to have made the switch.
For graphics, however, it will be a hard switch, as you don't have e.g. TikZ .
There are also no real alternatives available yet, though users are already starting to build some amazing-looking libraries -- just have a look at the Typst Discord.

Lastly, researchers often ask if it's still possible to upload the result to [**arXiv**](https://arxiv.org/).
The answer is *yes*.
You can just upload the PDF and this is usually accepted for both ConTeXt and Typst.
Of course, some journals still require you to submit LaTeX.
Some other journals, however, only require you to submit a PDF following a certain style specification.

## Conclusion - what should I use?

ConTeXt does a couple of things better than LaTeX, but it is still based on TeX, and the codebase is ... probably horrible?
So while it serves as a great LaTeX replacement for the time being, and you should try it if you liked the teaser above, it won't be the ultimate new typesetting system.

I think, in the end, we should all switch to Typst and make it the new typesetting system for the scientific community (at least the mathematical one).

The question is just *when* to switch to Typst.

If you need advanced graphics, you might not be able to switch yet.
(Though you can produce the graphics externally and then include them as e.g. SVGs.)
If you are a pure mathematician that mostly writes text anyways, you can switch right now already.
Check out Typst's [Guide for LaTeX users](https://typst.app/docs/guides/guide-for-latex-users/).
In between, you should have a look whether Typst already supports all the features you need.

For example, I already use it for my CV and for writing letters.
One feature I am still missing for writing e.g. a thesis in Typst, is the ability to wrap text around a floating image.

I will update you when there are big steps forward in Typst.
