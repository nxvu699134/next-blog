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

<center >#0BAD31</center>

No idea right?

## HSL

So HSL was born to more closely align with the way human vision perceives color-making attributes by representing colors in 3 attributes: (H)ue, (S)aturation and (L)ightness.

### Hue

Hue is position of color on the color wheel. This attribute of color lets us identify 2 colors are "blue" even if they look different.


Hue is measured in degree, where 0<sup>o</sup> is red, 120<sup>o</sup> is green, 240<sup>o</sup> is blue.

### Saturation

Saturation is how colorful of color, which can tell us how "hue" affected to our color.


Saturation value ranges from 0% (grey, no color) to 100% (vivid). Without saturation, hue is completely wiped out - change hue value does not change color (alway grey).

### Lightness

Lightness is just describe itself. It defines how close a color to black or to white.



As above, 0% lightness is pure black, 100% lightness is pure white and 50% is pure "hue" color.

Back to top example

<center >#0BAD31</center>

Equivalent to

At first glance, we can sense a bit about that color. Hue is 134 close to green, saturation is more than 50% that color will look "very green" and lightness tells us thats a dark color. So can conclude it's a "dark very green".

## The way to pick colors

IMO, modern web design color include 3 types of color: a neutral color (mostly grey), a primary color, an accent color.

For each type of color we need 6-8 shades. So to make a website we need at least 18 colors, sound like plenty and this work will take a tons of time to do.

### Choose a base color

For primary and accent color, picking base color (middle of your color shade) is the first step, then lighter and darker colors will relied on it.

There is no perfect way to do this, but a rule of thumb is to pick a shade that work well as a button background. Also need to check contrast ratio of that shade on

A note here that "middle shade" does not mean "50% lightness" or anything. Every color represents a bit different, so we should rely on our eyes and a good monitor.

### Define boundary

Next, pick darkest shade and lightest shade. IMO the darkest and lightest are usually used as background and text color in dark mode and light mode.

Lock your "hue" from base color, adjust saturation and lightness until meet our criteria. Lightness is the main axis in this situation, choose your maximum and mininum value it.

It's important to note that with very high lightness the HUE is almost wiped out. So just increase the saturation for very high or very low lightness (or lightness further away from 50%).

### Filling gaps

Have edge and the middle point, we just need to fill gaps between them. Choose lightness some point where middle and adjust saturation.


If need more shades, just repeat this step with filling the middle.


This rule will guarantee that our color step looks like in linear scale.


Apply to grey and accent we will have fancy color system

## Conclusion

There is no real scientific way to pick a perfect color palette but with some techniques that will make our life easier. Let math and rule do the hard work for us.
