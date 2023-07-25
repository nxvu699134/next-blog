---
title: Make color palette
desc: The easiest way to pick colors for a palette
date: 2021-09-17
image: /posts/make-color-palette/palette.webp
tags:
  - website
  - design
  - color palette
---

RGB is the most common formats for representing color on website. But it's not useful in most cases.

For example, what color is it or what color looks like ?

<center style="font-size: var(--font-size-600)">#0BAD31</center>

No idea right?

## HSL

So HSL was born to more closely align with the way human vision perceives color-making attributes by representing colors in 3 attributes: (H)ue, (S)aturation and (L)ightness.

### Hue

Hue is position of color on the color wheel. This attribute of color lets us identify 2 colors are "blue" even if they look different.

<img width="156" height="156" src="/assets/imgs/posts/the-easiest-way-to-pick-colors/color_wheel.png" alt="hsl color wheel"/>


Hue is measured in degree, where 0<sup>o</sup> is red, 120<sup>o</sup> is green, 240<sup>o</sup> is blue.

### Saturation

Saturation is how colorful of color, which can tell us how "hue" affected to our color.

<ColorBar colors={[
              {h: 230, s: 0, l: 50},
              {h: 230, s: 25, l: 50},
              {h: 230, s: 50, l: 50},
              {h: 230, s: 75, l: 50},
              {h: 230, s: 100, l: 50},
            ]}
          whichChange="s"
/>

Saturation value ranges from 0% (grey, no color) to 100% (vivid). Without saturation, hue is completely wiped out - change hue value does not change color (alway grey).

### Lightness

Lightness is just describe itself. It defines how close a color to black or to white.


<ColorBar colors={[
              {h: 230, s: 50, l: 0},
              {h: 230, s: 50, l: 25},
              {h: 230, s: 50, l: 50},
              {h: 230, s: 50, l: 75},
              {h: 230, s: 50, l: 100},
          ]}
          whichChange="l"
/>

As above, 0% lightness is pure black, 100% lightness is pure white and 50% is pure "hue" color.

Back to top example

<center style="font-size: var(--font-size-600)">#0BAD31</center>

Equivalent to

<ColorFlip color={{h: 134, s: 88, l: 36}}/>

At first glance, we can sense a bit about that color. Hue is 134 close to green, saturation is more than 50% that color will look "very green" and lightness tells us thats a dark color. So can conclude it's a "dark very green".

## The way to pick colors

IMO, modern web design color include 3 types of color: a neutral color (mostly grey), a primary color, an accent color.

For each type of color we need 6-8 shades. So to make a website we need at least 18 colors, sound like plenty and this work will take a tons of time to do.

### Choose a base color

For primary and accent color, picking base color (middle of your color shade) is the first step, then lighter and darker colors will relied on it.

There is no perfect way to do this, but a rule of thumb is to pick a shade that work well as a button background. Also need to check contrast ratio of that shade on <Link href="https://webaim.org/resources/contrastchecker/">WebAIM</Link>

<DemoButton />

A note here that "middle shade" does not mean "50% lightness" or anything. Every color represents a bit different, so we should rely on our eyes and a good monitor.

### Define boundary

Next, pick darkest shade and lightest shade. IMO the darkest and lightest are usually used as background and text color in dark mode and light mode.

Lock your "hue" from base color, adjust saturation and lightness until meet our criteria. Lightness is the main axis in this situation, choose your maximum and mininum value it.

<ColorPalette colors={[
                {h: 208, s: 97, l: 85},
                null,
                {h: 208, s: 55, l: 50},
                null,
                {h: 208, s: 100, l: 21},
              ]}
              withLabel
/>

It's important to note that with very high lightness the HUE is almost wiped out. So just increase the saturation for very high or very low lightness (or lightness further away from 50%).

### Filling gaps

Have edge and the middle point, we just need to fill gaps between them. Choose lightness some point where middle and adjust saturation.

<ColorPalette colors={[
                {h: 208, s: 97, l: 85},
                {h: 208, s: 75, l: 65},
                {h: 208, s: 55, l: 50},
                {h: 208, s: 82, l: 33},
                {h: 208, s: 100, l: 21},
              ]}
              withLabel
/>

If need more shades, just repeat this step with filling the middle.

<ColorPalette colors={[
                {h: 208, s: 97, l: 85},
                null,
                {h: 208, s: 75, l: 65},
                null,
                {h: 208, s: 55, l: 50},
                null,
                {h: 208, s: 82, l: 33},
                null,
                {h: 208, s: 100, l: 21},
              ]}
              withLabel
/>

This rule will guarantee that our color step looks like in linear scale.

<ColorPalette colors={[
                {h: 208, s: 97, l: 85},
                {h: 208, s: 75, l: 65},
                {h: 208, s: 55, l: 50},
                {h: 208, s: 82, l: 33},
                {h: 208, s: 100, l: 21},
              ]}
              withLabel={false}
/>

<ColorPalette colors={[
                {h: 344, s: 97, l: 85},
                {h: 344, s: 75, l: 65},
                {h: 344, s: 55, l: 50},
                {h: 344, s: 82, l: 33},
                {h: 344, s: 100, l: 21},
              ]}
              withLabel={false}
/>

<ColorPalette colors={[
                {h: 210, s: 26, l: 97},
                {h: 210, s: 21, l: 70},
                {h: 210, s: 15, l: 50},
                {h: 210, s: 22, l: 39},
                {h: 210, s: 30, l: 25},
              ]}
              withLabel={false}
/>

Apply to grey and accent we will have fancy color system

## Conclusion

There is no real scientific way to pick a perfect color palette but with some techniques that will make our life easier. Let math and rule do the hard work for us.
