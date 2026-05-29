C-View is a lightweight command-line image processor written entirely in C. It can load, manipulate, and save images using only the standard library, with no external dependencies.

## Why C

This was a deliberate constraint. Writing an image processor in C means dealing with memory directly: allocating pixel buffers, managing file I/O at the byte level, and implementing operations like greyscale conversion, brightness adjustment, and edge detection from scratch.

It's a different kind of thinking compared to high-level languages. Every operation has a visible cost. Bugs often manifest as corrupted images, which is a surprisingly useful debugging feedback loop.

## What it does

C-View supports reading and writing PPM and PGM image formats, applying transformations like flipping, rotating, and filtering, and outputting the result to a new file. The codebase is intentionally minimal; the goal was clarity over features.

## What I learned

Working close to the metal gave me a much better intuition for what higher-level abstractions are actually doing. It's the kind of project that makes everything else feel easier afterward.
