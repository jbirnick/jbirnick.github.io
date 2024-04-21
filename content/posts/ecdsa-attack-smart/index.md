+++
title = 'How to break Elliptic Curve Cryptography with $p$-adic numbers (in a special case)'
description = 'I show how to break the elliptic curve discrete logarithm problem in the special case where the curve has exactly $p$ points over $\mathbb{F}_p$. This attack was invented by N.P. Smart. I also treat the necessary mathematical background.'
keywords = []
author = 'Johann Birnick'
categories = ['mathematics']
tags = ['cryptography', 'elliptic curves', '$p$-adic numbers', 'arithmetic geometry']
publishDate = 2023-07-05
pdf = false
draft = true
+++
$\gdef\Z{\mathbb{Z}}\gdef\Q{\mathbb{Q}}\gdef\F{\mathbb{F}}\gdef\Pr{\mathbb{Pr}}\gdef\Af{\mathbb{Af}}$


These days, elliptic curves over finite fields are widely used in public-key cryptography since about 20 years.
This is due to the fact that the *discrete logarithm problem* DLOG on such a curve is generally hard to solve; meaning, so far nobody has found an algorithm that computes solutions in a reasonable time.
However, in special cases one can solve DLOG efficiently.
The most intriguing attack was invented by [Nigel P. Smart](https://nigelsmart.github.io/) in TODO:
It makes use of the theory of elliptic curves over the $p$-adic numbers $\Q_p$ to solve DLOG when the curve over $\F_p$ has exactly $p$ points.
The goal of this article is to explain Smart's Attack with more elementary terms, making it quickly accessible even to beginning undergraduates.

TODO what does the article do

## The Problem

## Projective Space of a Ring

## Elliptic Curves over a Ring

## Elliptic Curves over $\Z/p^2\Z$

## The Attack
