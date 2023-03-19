+++
title = 'Ramification for Number Fields and Algebraic Curves'
description = 'I show how the decomposition theory of number fields is applicable to algebraic curves, which allows me to visualize the concepts at the example of a parabola.'
keywords = ['math', 'mathematics', 'number theory', 'algebraic curves', 'Dedekind domains', 'ramification', 'decomposition group', 'inertia group']
author = 'Johann Birnick'
categories = ['mathematics']
tags = ['number theory', 'algebraic curves']
publishDate = 2023-03-19
pdf = false
+++
{{< hideraw >}}$\gdef\Z{\mathbb{Z}}\gdef\Q{\mathbb{Q}}\gdef\F{\mathbb{F}}\gdef\C{\mathbb{C}}\gdef\Pr{\mathbb{Pr}}\gdef\Af{\mathbb{Af}}\gdef\a{\mathfrak{a}}\gdef\p{\mathfrak{p}}\gdef\P{\mathfrak{P}}\gdef\Spec{\operatorname{Spec}}\gdef\Gal{\operatorname{Gal}}${{< /hideraw >}}

Take an extension $L/K$ of number fields. In a first course in algebraic number theory one is introduced to the basic decomposition theory of this extension: splitting, inertness, ramification, decomposition group, inertia group.
Now, we have the same notions with the same results for morphisms of smooth algebraic curves!
The reason being that they also give extensions $B/A$ of Dedekind domains, and the theory works in the generality of Dedekind domain extensions.
In this post, we will visualize the above decomposition concepts for curves.[^5]

{{< figure src="interaction.svg" >}}

[^5]: A better title might have been "Prime Decomposition for [...]", but in particular this post achieves to visualize/explain why the word "ramified" is used number theory, which is a good motivation for reading the post.

## Number Fields, Curves, and Dedekind Domains

The object connecting the world of number fields with the world of curves are *Dedekind domains*.
Usually, they are defined as rings $A$ which are:

- integral domains
- integrally closed
- Noetherian
- of dimension 1

This looks quite technical and arbitrary, but the most important fact is

**Theorem.** Every non-zero ideal $0 \neq \a \subseteq A$ of a Dedekind domain $A$ can be uniquely written as a product of prime ideals $\a = \p_1^{e_1} \cdots \p_r^{e_r}$.

and this is also the defining property of them, in the sense that every integral domain which satisfies the theorem above is a Dedekind domain.
The fact

**Proposition.** The integer ring of a number field is a Dedekind domain.

is usually proved in an algebraic number theory course.
Let's quickly review the proof.
The integer ring of a number field is clearly an integral domain as it's the subring of a field.
It's integrally closed, because it's defined as an integral closure (of $\Z$ inside the number field), and it's a basic (though non-trivial) Lemma that integral closures are indeed integrally closed.
Noetherianness and dimension 1 are slightly more involved to prove, you should look it up in a textbook.

Now what about curves? What do they have to do with Dedekind domains?
First, let's review what an algebraic curve *is*.
We will use scheme notation, but don't worry; we won't use any scheme theory and you don't even need to know what a scheme is.

Take any ring $R$. We define {{< raw >}}$\Spec R \coloneqq \{ \text{$p \subset R$ prime}\}${{< /raw >}} to be the set of all prime ideals of $R$.
It is the underlying set of the scheme associated to $R$ (which is also called $\Spec R$), and it's elements (the prime ideals) are the *points* of the scheme.
This is motivated by the theory of varieties:
For any algebraically closed field $k$ and polynomials $f_1, \dots, f_r \subseteq k[X_1,\dots,X_n]$, the maximal ideals of $k[X_1,\dots,X_n]/(f_1,\dots,f_r)$ correspond exactly to the solution points {{< raw >}}$\{p \in k^n \mid \forall i : f_i(p) = 0 \}${{< /raw >}}.
So we might just *define* the variety as the maximal ideals of $k[X_1,\dots,X_n]/(f_1,\dots,f_r)$.
In scheme theory we more generally take all *prime* ideals (for different reasons).

To state what a curve in the scheme-theoretic sense is, you need quite some scheme theory.
But we will only work with *plane affine* curves:
Take any field $k$, not necessarily algebraically closed, and an irreducible polynomial $f \in k[X,Y]$.
Then $\Spec k[X,Y]/(f)$ is a (plane affine algebraic) curve.
A note on the irreduciblity of $f$: This is just to ensure that the scheme has only one irreducible component;
if $f = gh$ then $k[X,Y]/(f) \cong k[X,Y]/(g) \times k[X,Y]/(h)$ and hence by functoriality (see later) $\Spec k[X,Y]/(f) \cong k[X,Y]/(g) \sqcup k[X,Y]/(h)$ so that we could reduce our analysis to the analysis of two subcurves.
We will only look at *smooth* curves, where we won't give the definition of smooth, but in our case of plane affine curves it's similar to the definition of smooth varieties.

Ok, but what does this have to do with Dedekind domains?
Every curve has it's *coordinate ring*.
In our case of $\Spec k[X,Y]/(f)$, the coordinate ring is exactly $k[X,Y]/(f)$.
Now:

**Proposition.** The coordinate ring of smooth alg. curve is a Dedekind domain.

[^1]: Notice how integrally closedness follows essentially by definition in the case of number fields, but is highly non-trivial for smooth curves.

Let's also review the proof of this.
That it's an integral domain follows from the scheme being irreducible.
(For example, remember that in our case we required $f$ to be irreducible, which makes $k[X,Y]/(f)$ an integral domain.)
It's integrally closed precisely because it's smooth, though the proof is highly non-trivial.[^1]
Dimension 1 is part of the definition of curve.
Noetherian is also part of the abstract definition of curve, but note that in our case it also a consequence of the Hilbert basis theorem.

As the coordinate ring is (always) an integral domain, we can take its field of fractions.
It is called the *function field* of the curve.
We have an analogy:

{{< center >}}
| Number Fields | Smooth Algebraic Curves|
| ----------- | ----------- |
| number field | function field of the curve |
| integer ring of the number field | coordinate ring of the curve |
{{< /center >}}

In both cases we have a Dedekind domain $A$ and it's fraction field $K$, and we can develop the theory in this abstract setup.

## Primes = Points

I promised to make visualizations in this post, so let's start with that.
Fix a Dedekind domain $A$.
We already learned that the points of $\Spec A$ are the prime ideals of $A$.
All prime ideals except $(0)$ are maximal because $A$ has dimension 1.
$(0)$ is also called the *generic point*, but that's not so relevant for us.
For completeness, we will include it in drawings (always on the left side), but we won't bother with it's interpretation.
Here is a picture of $\Spec \Z$:

{{< figure src="SpecZ.svg" >}}

And for the algebraic curve case, here is a picture of the real affine line $\Spec \R[T]$:

{{< figure src="SpecLine.svg" >}}

Ignoring the generic point, we have two classes of points:

- the points $(T-t)$ with $t \in \R$ arbitrary
- the points $((T-a)^2+b^2)$ with $a \in \R$ and $b < 0$

A point $((T-a)^2 + b^2)$ in the second class splits into two points $(T - (a + ib))$, $(T - (a - ib))$ when we extend the base field to the complex numbers.
So it can be viewed as those two complex points "together".
In the picture, I draw for this the underlying complex point with positive imaginary part.

How did I come up with this list of prime ideals of $\R[T]$?
From the Nullstellensatz I know that all prime ideals of $\C[T]$ (except $(0)$) are given by $(T-t)$ with $t \in \C$.
We have an inclusion $\R[T] \to \C[T]$.
Now you can use a mixture of pulling back prime ideals, extending prime ideals, and looking at the action of $\Gal(\C/\R)$ on $\C[T]$ to come up with the list I've just given.
I won't go into details, but in the end it's actually just intuition.
I haven't formally proved that the ideals I mention are indeed prime and that those are all.
But I know it is true, and hopefully this post helps you to gain that intuition.

Let's look at the ring $A/\p$ of a point $(0) \neq \p \in \Spec A$.
$\p$ is maximal, hence $A/\p$ is a field, called the *residue field* at $\p$.
What are the residue fields in the examples above?
For $\Spec \Z$, they are $\F_2$, $\F_3$, $\F_5$, $\F_7$, $\F_{11}$, and so on.
For $\Spec \R[T]$, they are $\R$ for the points of the first class, and $\C$ for the points of the second class (check!).
That's why I put bigger points in the picture for points of the second class.
Note that the first class of points is the horizontal base line in the picture, whereas the second class of points is the strict upper half plane.

Now we ready to look at a more complicated example.
It will be the example accompanies us through the rest of the post.
It is a parabola over the real numbers, namely $\Spec \R[X,Y]/(Y^2 - X)$:

{{< figure src="SpecParabola.svg" >}}

Yes, this is *one* picture, it's all beloning to $\Spec \R[X,Y]/(Y^2 - X)$.
Ignoring the generic point, this time we have three classes of points:[^7]

- the points $(\overline{X}-x,\overline{Y}-y)$ with $x \geq 0$ and $y^2 = x$
- the points $(\overline{X}-x,\overline{Y}^2 + y^2)$ with $y^2 = -x$.
- the points $((\overline{X}-a)^2 + b^2, \text{[something]})$ with $a \in \R$ and $b < 0$, and the are two [somethings]s for each choice of $a,b$

[^7]: Let me note that "classes" in this context are not actually intrinsic classes.
Whereas in the example of the projective line the two classes indeed represented degree 1 points and degree 2 points, respectively, for the parabola there is no sensible intrinsic partition of the points that yields the classes I gave. It should rather be understood as a partition of points that a human would make when we first analyzes such an example.

The first class is the lower right in the picture, the second class the lower left, and the third class the top.
They can be also seen as unions (Galois orbits) of complex points with ...

- ... $x$-coordinate in $\R$ and $y$-coordinate in $\R$.
- ... $x$-coordinate in $\R$ and $y$-coordinate *not* in $\R$.
- ... $x$-coordinate not in $\R$ (and hence also $y$-coordinate not in $\R$, since $y^2 = x$).

What exactly are the complex points of which they are a union?
For points $(\overline{X}-x,\overline{Y}^2 + y^2)$ in the second class, they are $(\overline{X}-x,\overline{Y}-iy)$ and $(\overline{X}-x,\overline{Y}+iy)$.
In the picture, I drew a dotted line for these complex points and connected them (in one case) using blue ink, which stands for our point of the second class. (Compare with my picture of the real affine line: There I only drew the upper half plane, which was representing one of the two complex points of interest. If I was consistent, I should have drawn the whole complex plane and connected a point to it's complex conjugate with blue ink.)
For the third class it might be confusing at first sight:
We start with an $x$-coordinate that already corresponds to two complex points.
Because $y$ is a square root of $x$, we should get four complex points out of this.
So far so true, but these four points will actually be two real points.
Before my words get more and more confusing, let's just do the computation for the point in the picture which (as a prime ideal) contains $X^2 +4$.
This means we are looking at the $x$-coordinate $\pm 2i$, since $(X-2i)(X+2i) = (X^2 + 4)$.
Taking squareroots we get the four complex points $$(2i, 1+i), (2i, -1-i), (-2i, 1-i),(-2i, -1+i)$$ lying on the parabola.
The third is the conjugate of the first, and the fourth is the conjugate of the second.
We get 2 (!) real points $(X^2 + 4, 2Y -X -2)$ and $(X^2 + 4, 2Y + X + 2)$.
The latter point is just the former with the sign of the $y$-coordinate flipped -- as we would expect it for finding a square root!

And what are the residue fields? $\R$ for the first class, $\C$ for the second, and $\C$ for the third.
Again, that's the reason why some dots in picture are bigger than others.

Let me quickly explain/revise how I came up with this partitioning into three classes.
I started with my classification of the points on the real affine line, and then I plugged this in for the $x$-value.
As I'm looking for a point on the parabola, then I want to find $y = $ "$\sqrt{x}$".
For positive real $x$ that's easy and you get two real points (class 1).
For negative real $x$ you get a pair of complex conjugates which glue to one real point (class 2).
And for $x$ that are already a pair of complex conjugates on the real affine line, it's the computation we just did.
You get four complex points that glue to two real points (class 3).

Very important to notice here is that I *made a choice*:
I started with the $x$-coordinate (and then solved for $y$).
Why not start with the $y$-coordinate? Then we don't need to find square roots, but just square the value!
Indeed, that would be another approach.
In mathematical terms, I never just looked at my parabola on it's own, I was actually looking at the morphism of algebraic curves which is the projection to the $x$-axis!
To be precise, I started with a point on the $x$-axis and then was finding preimages under this morphism.
An alternative approach would be to look at the projection to the $y$-axis, or to any other line.
It will yield different partitions into classes of the points on the parabola.
This illustrates how important morphisms are, I even used them when I was trying to analyze an object on its own.

**Exercise.** Note that the last example is an algebraic curve analog of a quadratic number field, so let's draw $\Z[i]$.
Remind yourself of the characterization of prime ideals of $\Z[i]$.
Then draw a picture of $\Spec \Z[i]$.
Use smaller and bigger dots appropriately.

## Extensions = Morphisms

So far, we tried to look at number fields and smooth algebraic curves as objects on their own.
We realized that this is actually easier if we look at morphisms to simpler objects.
What do I even mean with "morphisms"?
Number fields and algebraic curves are objects in different categories, and the morphisms between them are:

- field extensions in the case of number fields
- morphisms of schemes in the case of algebraic curves

But since we work in the generality of Dedekind domains, what is the unifying theme of those two?

{{< raw >}}
<div class="floatright">
$$
\begin{CD}
B @>>> L \\
@AAA @AAA \\
A @>>> K
\end{CD}
$$
</div>
{{< /raw >}}

It is the *$AKLB$-setup*.
Start with a Dedekind domain $A$.
We have it's field of fractions $K$.
Take a finite extension $L/K$.
Lastly, take the integral closure of $A$ in $L$ and call it $B$.
This yields the commutative diagram on the right, where:

- all maps are injective
- $A,B$ are Dedekind domains (that's highly non-trivial for $B$!)
- $K,L$ are the fraction fields of $A,B$

Any extension of number fields satisfies this setup (where $A,B$ are the integer rings).
Also every morphism of algebraic curves satisfies this setup ($K,L$ are the function fields, $A,B$ are the coordinate rings).

**Exercise.** Find a category-theoric formulation of what I just said.

Most of the results which are proved in an algebraic number theory course for extensions of number fields, actually hold in the generality of this setup.
Sometimes you also need that the extension $L/K$ is separable, and a large part of the theory only begins when you assume $L/K$ to be Galois, so that you can use Galois theory.

{{< raw >}}
<div class="floatleft">
$$
\begin{CD}
B @. {\Spec B} \\
@A\varphi AA @VV{\Spec \varphi}V \\
A @. {\Spec A}
\end{CD}
$$
</div>
{{< /raw >}}

Before we look (back) at our main example, let me quickly note that $\Spec$ is a contravariant functor from the category of rings to the category of schemes.
This means that every morphism of rings $\phi: A \to B$ yields a morphism $\Spec(\varphi): \Spec(B) \to \Spec (A)$ of schemes.
Indeed, when $\P \subset B$ is a prime ideal of $B$ then $\p \coloneqq \varphi^{-1}(\P) \subset A$ is a prime ideal of $A$ (check!), and the map $\Spec(\varphi)$ is exactly that -- pulling back prime ideals.[^2]

[^2]: This functoriality is one reason why we take the set of all prime ideals in scheme theory, rather than just the maximal ideals.

Now back to our parabola.
I already mentioned that we were looking at the projection onto the $x$-axis..
This is the morphism of algebraic curves $$\Spec \R[X,Y]/(Y^2 - X) \to \Spec \R[X]$$ induced by the ring morphism: {{< raw >}}$$\begin{align*}\R[X] &\hookrightarrow \R[X,Y]/(Y^2 - X) \\ X &\mapsto \overline{X}\end{align*}$${{< /raw >}}
And here is the picture:

{{< figure src="ProjectionX.svg" >}}

- on the top we have the parabola:
  * red is class 1
  * blue is class 2
  * green is class 3
- on the bottom we have the real affine line
  * red+blue is class 1
  * green is class 2
- the map sends
  * (the generic point to the generic point)
  * red to red, blue to blue, green to green
  * $\P_{a,1}$ and $\P_{a,2}$ to $\p_a$
  * $\P_b$ to $\p_b$
  * $\P_c$ to $\p_c$
  * $\P_{d,1}$ and $\P_{d,2}$ to $\p_d$

Please make all of those points very clear to yourself. Why are they true?
This is the heart of the post.

The rest of the post is devoted to study different notions of decomposition at the example of this morphism and the points $\p_a, \p_b, \p_c$.
We leave out all the green stuff, and therefore $\p_d$, because it makes the pictures smaller:

{{< figure src="ProjectionXrestricted.svg" >}}

But you should study $\p_d$ alongside, just as the projection to the $y$-axis.

**Exercise.** Look at the morphism of algebraic curves induced by: {{< raw >}}$$\begin{align*}\R[Y] &\hookrightarrow \R[X,Y]/(Y^2 - X) \\ Y &\mapsto \overline{Y}\end{align*}$${{< /raw >}} (This the projection of the parabola to the $y$-axis.) Draw it. Analyze all the notions of decomposition that we will analyze hereafter also for this morphism.

## Factorization = Preimages

For the rest of this post, I will take the decomposition concepts from number theory, and first give the definition for the general $AKLB$-setup.
Thus it's applicable to both extensions of number fields, as well as to morphisms of algebraic curves.
Then I will illustritate the respective concept at our example of the parabola projecting to the $x$-axis, which is the following $AKLB$-setup:

- {{< raw >}}$A = \R[X]${{< /raw >}}
- $K = \R(X)$
- $L = \operatorname{Frac}(\R[X,Y]/(Y^2 - X))$
- $B = \R[X,Y]/(Y^2 - X)$

We begin with the building block of it all: factoring extended prime ideals.
So let's take a general $AKLB$-setup (geometrically this gives a morphism $\Spec(B) \to \Spec(A)$).
Take a prime $\p \subset A$ (geometrically this is a point on $\Spec A$).
We have the ideal $\p B \subset B$, so we can factor it by unique factorization of ideals in Dedekind domains.
Write $$\p B = \P_1^{e_1} \cdots \P_r^{e_r}$$
with primes $\P_i \subset B$.
Geometrically, the $\P_i$ are points on $\Spec B$, and they are exactly the preimages of $\p \in \Spec A$ with "multiplicity" $e_i$ under $\Spec B \to \Spec A$!

So in our example, we find either with a lot of algebra or from looking at the picture, that:

- $\p_a B = \P_{a,1} \P_{a,2}$
- $\p_b B = \P_{b}^2$
- $\p_c B = \P_c$

**Exercise.** Write down the factorization of $\p_d B$.

The number $e_i$ is called the *ramification index*, for reasons that now become clear now when we look at the algebraic curves side:
In the geometric case, there is really some "ramification" going on -- just look at our morphism around the origin!
(Though it's best seen if we work over $\C$ instead of $\R$ and look at the Riemann surfaces, where we see the ramification even clearer.)

There is another number $f_i$ associated to each $\P_i$, which is called the *inertia degree* or *residue class degree*.
It's defined as $f_i \coloneqq [B/\P_i: A/\p]$, the degree of the field extension of residue fields.

In our case that will be either 1 or 2:

- $f_{\P_a,1} = f_{\P_a,2} = 1$
- $f_{\P_b} = 1$
- $f_{\P_c} = 2$

Here is the picture of our morphism again, with annotated ramification indices and inertia degrees:

{{< figure src="ProjectionXrestrictedNums.svg" >}}

Generally, we see that points above $(X-x) \in \Spec \R[X]$ ...
- ... split into two primes if $x > 0$.
- ... ramify for $if x=0$
- ... are inert if $x < 0$

**Exercise.** What about points above $((X-a)^2 + b^2)$? You already gave the factorization of $\p_d$, so that gives you ramification indeces. What about inertia degrees?

## The Fundamental Identity

The *fundamental identity* is given by the following theorem.

**Theorem.** Assume the extension $L/K$ in the $AKLB$-setup is separable. Writing $\p B = \P_1^{e_1} \cdots \P_r^{e_r}$, we have: $$\sum_{i=1}^r e_i f_i = [L : K]$$

**Important Exercise.** Verify the fundamental identity for our example.

Geometrically, the fundamental identity just means that every point in $\Spec A$ has exactly $[L:K]$ preimages in $\Spec B$, counted with multiplicity and "thickness".

**Exercise.** What about the morphism $\Spec \Z[i] \to \Spec \Z$ coming from number fields. Can you see the similarity? (one prime ramifies, "half" of the primes split, "half" are inert, ...)

## Galois extensions

From now on assume that the extension $L/K$ in our $AKLB$-setup is Galois.
Let's say we have a prime $\P$ above $\p$.
(At this point, it should be clear what this means!)
Then for $\sigma \in \Gal(L/K)$, the set $\sigma(\P)$ is again a prime ideal lying above $\p$ (verify!).
In other words, we have an action of the Galois group on the primes above $\p$.
A fundamental fact about this action is that it's transitive!
This simplifies the fundamental identity.

**Proposition.** Assume the extension $L/K$ in the $AKLB$-setup is Galois.
Writing $\p B = \P_1^{e_1} \cdots \P_r^{e_r}$, there is for all $i,j$ a $\sigma \in \Gal(L/K)$ such that $\sigma(\P_i) = \P_j$.

**Corollary.** In the same setup, it follows that $e_i = e_j =: e$ and $f_i = f_j =: f$ for all $i,j$.
Hence the fundamental identity reads $r e f = [L : K]$.

{{< floatright >}}
| $\p$   | $r$ | $e$ | $f$ |
|-----|---|---|---|
| $\p_a$ | 2 | 1 | 1 |
| $\p_b$ | 1 | 2 | 1 |
| $\p_c$ | 1 | 1 | 2 |
{{< /floatright >}}

Looking back at our parabola example, we see that we do have a Galois extension (because it's of degree 2 and separable).
What is the Galois group?
It's {{< raw >}}$\{\mathrm{id}, \tau\}${{< /raw >}} where $\tau$ is "flipping around the $x$-axis", "$(x,y) \mapsto (x, -y)$".
Formally, it's the map $\Spec \R[X,Y]/(Y^2 - X) \to \Spec \R[X,Y]/(Y^2 - X)$ induced by the ring morphism satisfying $\overline{X} \mapsto \overline{X}$ and $\overline{Y} \mapsto - \overline{Y}$.
Note that the simpler fundamental identity is verified, with the numbers given on the right.

## Decomposition Group+Field

Now we will analyze each $\P$ above $\p$ separately.
We begin with the stabilizer subgroup of $\Gal(L/K)$ of $\P$, which we call the *decomposition group*:
{{< raw >}}$$D_\P \coloneqq \{ \sigma \in \Gal(L/K) \mid \sigma(\P) = \P \}$${{< /raw >}}

{{< raw >}}
<div class="floatright">
<table>
<thead>
<tr>
<th>$\P$</th>
<th>$D_\P$</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\P_{a,1/2}$</td>
<td>$\{\mathrm{id}\}$</td>
</tr>
<tr>
<td>$\P_b$</td>
<td>$\{\mathrm{id, \tau}\}$</td>
</tr>
<tr>
<td>$\P_c$</td>
<td>$\{\mathrm{id, \tau}\}$</td>
</tr>
</tbody>
</table>
</div>
{{< /raw >}}

In our example, we can see this visually! Just *look* which points are fixed by the Galois group.
Clearly everything is fixed by the identity, but not all points are fixed when we flip around the $x$-axis.
We get the decomposition groups listed on the right.

**Exercise.** We want to see why the name the name "decomposition group", sometimes also called "splitting group", makes sense.
When is it equal to the whole Galois group $\Gal(L/K)$, when is it trivial?

Having a subgroup of the Galois group, Galois theory tells us to look at the fixed field!
We call it the *decomposition field* {{< raw >}}$L^{D_\P} \coloneqq \{ x \in L \mid \forall \sigma \in D_\P : \sigma(x) = x\}${{< /raw >}}.
According to our philosophy, this field will be the function field of a scheme $\Spec C$ with $C = B \cap L^{D_\P}$ a Dedekind domain.
If we started with the Dedekind domain of a curve, this will be a curve as well, and hence we can visualize it.

Let's look what it gives in our example.
Since our Galois group only has size 2, we can only get either the full parabola or just the real affine line, there is nothin inbetween.
Reading off the previous table, we see that we get the parabola for $\p_b$ and $\p_c$, and we get the real affine line for $\p_a$.

## Inertia Group+Field

Take $\sigma \in D_{\P}$.
Hence $\sigma(\P) = \P$, so we have an induced morphism $L/\P \to K/\p$ of residue fields.
It's an automorphism (since $\sigma$ has an inverse in $D_\P$) and it fixes $K/\p$ (since $\sigma$ fixes $K$), i.e., it's an element of $\operatorname{Aut}(L/\P,K/\p)$.
I can only write "$\Gal$" instead of "$\operatorname{Aut}$" if it's a Galois extension.
Generally it isn't separable, but it will be in all of our examples, and also the next section depends on this assumption.
So let's just assume it.

We define the kernel of this to be the *inertia group*:

{{< raw >}}$$I_\P \coloneqq \ker (D_\P \to \Gal(L/\P, K/\p)) = \{ \sigma \in D_\P \mid \forall x \in B : \sigma(x) \equiv x \mod \P \}$${{< /raw >}}

{{< raw >}}
<div class="floatright">
<table>
<thead>
<tr>
<th>$\P$</th>
<th>$I_\P$</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\P_{a,1/2}$</td>
<td>$\{\mathrm{id}\}$</td>
</tr>
<tr>
<td>$\P_b$</td>
<td>$\{\mathrm{id, \tau}\}$</td>
</tr>
<tr>
<td>$\P_c$</td>
<td>$\{\mathrm{id}\}$</td>
</tr>
</tbody>
</table>
</div>
{{< /raw >}}

**Important Exercise.** Recall what the residue fields of $\P_{a,1/2}, \P_b, \P_c$ are.
Calculate the inertia group for these points.
You should find the groups given on the right.

Again, the inertia group yields a fixed field $L^{I_\P}$, called, unsurprisingly, the *inertia field*.
This yields another scheme, with whose visualization we will wait until the next section.

## The Filtration

In total, we have the filtration

{{< raw >}}$$\{\mathrm{id}\} \subseteq  I_\P \subseteq D_\P \subseteq \Gal(L/K)$${{< /raw >}}

which, applying the Galois theory functor, yields a tower of fixed fields:

{{< raw >}}$$L \supseteq  L^{I_\P} \supseteq L^{D_\P} \supseteq K$${{< /raw >}}

The quotient sizes, respectively extension degrees, are:

- {{< raw >}}$[I_\P : \{\mathrm{id}\}] = [L : L^{I_\P}] = e${{< /raw >}}
- $[D_\P : I_\P] = [L^{I_\P} : L^{D_\P}] = f$
- $[\Gal(L/K) : D_\P] = [L^{D_\P} : K] = r$

So we have splitted the product $ref = [L : K]$ appearing in the simplified fundamental identity into three subfields/morphisms!
It's not very surprising that they also behave well with respect to primes:

- $e(\P \mid \P \cap L^{I_\P}) = e$ and $f(\P \mid \P \cap L^{I_\P}) = 1$
- $e(\P \cap L^{I_P} \mid \P \cap L^{D_\P}) = 1$ and $f(\P \cap L^{I_P} \mid \P \cap L^{D_\P}) = f$
- $e(\P \cap L^{D_P} \mid \p) = 1$ and $f(\P \cap L^{D_P} \mid \p) = 1$

In other words, we devided the decomposition behaviour of $\P$ over $\p$ into its three components:

- the "ramification" part is entirely contained in $L/L^{I_\P}$
- the "inert" part is entirely contained in $L^{I_\P}/L^{D_\P}$
- the "splitting" part is entirely contained in $L^{D_\P}/K$

**WARNING.** As I hinted on before, not all of the facts mentioned in this section are generally true, but you need that the residue field extension $L/\P$ over $K/\p$ is separable.
This allows you for example to prove that $D_\P \to \Gal(L/\P, K/\p)$ is actually surjective, yielding a short exact sequence $0 \to I_\P \to D_\P \to \Gal(L/\P,K/\p) \to 1$.
But some of the facts are generally true and can be proved quite easily, and most definitely you can verify all of the facts for our example!

We finish, of course, with a visualization.
Taking the respective curves induced by the fixed fields, here is the illustration of the decomposition for our points $\P_{a,1/2}$, $\P_b$, and $\P_c$: (this time without generic points)

{{< figure src="FinalDecomposition.svg" >}}

**Exercise.** Pick your favorite field $k$ and your favorite elliptic curve $\Spec k[X,Y]/(Y^2 - X^3 - aX - b)$ with short Weierstrass equation.
Think about the decomposition of the projection to the $x$-axis and to the $y$-axis, respectively. [^3]

[^3]: Faced with this exercise, people suddenly changed their "favorite" field. ;)
