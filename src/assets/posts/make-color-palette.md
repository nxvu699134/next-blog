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

```#0BAD31```

No idea right?

## HSL

HSL was born to more closely align with the way human vision perceives color-making attributes by representing colors in 3 attributes: (**H**)ue, (**S**)aturation and (**L**)ightness.

### Hue

Hue is position of color on the color wheel. Colors on the wheel are pure colors, which means they are unique. This attribute of color lets us identify 2 colors are "blue" even if they look different.

Hue is measured in degree, where 0<sup>o</sup> is <span style={{color: 'red'}}>red</span>, 120<sup>o</sup> is <span style={{color: 'green'}}>green</span>, 240<sup>o</sup> is <span style={{color: 'blue'}}>blue</span>. To straightfoward, lets construct a 12 color wheel.

Firstly, the foundation of color wheel is the **primary color triad: <span style={{color: 'red'}}>red</span>, <span style={{color: 'green'}}>green</span>, <span style={{color: 'blue'}}>blue</span>** (1st-level colors).
![primary color triad](/posts/make-color-palette/1-color.webp)

Then fill **secondary colors** (2nd-level colors) by mixing two primary colors in equal amounts and placing in the middle of those primary colors. So the level of color depends on how many colors are mixed to construct that color.
![secondary color](/posts/make-color-palette/2-color.webp)

Finally, fill **tertiary colors** (3rd-level colors) by repeating the previous step but with 1 primary color and 1 secondary color.
![tertiary color](/posts/make-color-palette/3-color.webp)

There are 4th-level colors, 5th-level colors, etc. that can be added to the wheel by splitting more and more cells and then repeating those steps. In other words, we can construct infinite colors.

### Saturation

Saturation is how colorful of color, which can tell us how "hue" affected to our color.
![saturation](/posts/make-color-palette/saturation.png)

Saturation value ranges from 0% (grey, no color) to 100% (vivid). Without saturation, hue is completely wiped out - change hue value does not change color (alway grey).

### Lightness

Lightness is just describe itself. It defines how close a color to black or to white.
![saturation](/posts/make-color-palette/lightness.png)

As above, 0% lightness is pure black, 100% lightness is pure white and 50% is pure "hue" color.

Back to this color:

```#0BAD31```

Equivalent to

<span style={{color: 'white', background: '#0BAD31', padding: '16px 32px' }}>HSL(134, 88%, 36%)</span>

At first glance, we can sense a bit about that color. Hue is 134 close to green, saturation is more than 50% that color will look "very green" and lightness tells us thats a dark color. So we can conclude it's "dark very green".

## Pick colors for palette

IMO, modern web design color include 3 types of colors: a neutral color (mostly gray), a primary color and an accent color.

For each type of color, we need 6-8 shades. So to make a website, we need at least 18 colors, which sounds like plenty and this work will take tons of time to do.

### Choose a base color

For primary and accent colors, picking the base color (the middle of your color shade) is the first step, then lighter and darker colors will depend on it.

There is no perfect way to do this, but a rule of thumb is to pick a shade that works well as a button background. Also need to check the contrast ratio of that shade on [WebAIM](https://webaim.org/resources/contrastchecker/)
![pick base color](/posts/make-color-palette/pick-base.png)

A note here that "middle shade" does not mean "50% lightness" or anything. Every color represents a bit different, so we should rely on our eyes and a good monitor.

### Define boundary

Next, pick the darkest shade and the lightest shade. IMO the darkest and lightest are usually used as background and text color in dark mode and light mode, respectively.

Lock your "hue" from the base color then adjust saturation and lightness until it meets our criteria. Lightness is the main axis in this situation, choose your maximum and minimum values for it.
![pick init color](/posts/make-color-palette/pick-init.png)

It's important to note that with very high lightness the HUE is almost wiped out. So just increase the saturation for very high or very low lightness (or lightness further away from 50%).

### Filling gaps

We have the edge and the middle point, we just need to fill gaps between them. Choose lightness at some point in the middle and adjust saturation.
![pick full colors](/posts/make-color-palette/pick-fill.png)

If need more shades, just repeat this step with filling the middle.
![pick more colors](/posts/make-color-palette/pick-more.png)

This rule will guarantee that our color step looks like in linear scale.
![accent colors](/posts/make-color-palette/other-accent.png)


Applying strategy to gray and accent, we will have a fancy color system.

## Conclusion

There is no real scientific way to pick the perfect color palette, but with some techniques, we can make our lives easier. Let math and rules do the hard work for us.
