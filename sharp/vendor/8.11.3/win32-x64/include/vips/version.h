/* Macros for the header version.
 */

#ifndef VIPS_VERSION_H
#define VIPS_VERSION_H

#define VIPS_VERSION		"8.11.3"
#define VIPS_VERSION_STRING	"8.11.3-Wed Aug 11 09:29:27 UTC 2021"
#define VIPS_MAJOR_VERSION	(8)
#define VIPS_MINOR_VERSION	(11)
#define VIPS_MICRO_VERSION	(3)

/* The ABI version, as used for library versioning.
 */
#define VIPS_LIBRARY_CURRENT	(55)
#define VIPS_LIBRARY_REVISION	(2)
#define VIPS_LIBRARY_AGE	(13)

#define VIPS_CONFIG		"enable debug: no, enable deprecated library components: no, enable modules: no, use fftw3 for FFT: no, accelerate loops with orc: yes, ICC profile support with lcms: yes (lcms2), zlib: yes (found by search), text rendering with pangocairo: yes, font file support with fontconfig: yes, RAD load/save: no, Analyze7 load/save: no, PPM load/save: no, GIF load:  yes, EXIF metadata support with libexif: yes, JPEG load/save with libjpeg: yes (pkg-config), JXL load/save with libjxl: no (dynamic module: no), JPEG2000 load/save with libopenjp2: no, PNG load with libspng: yes, PNG load/save with libpng: yes (pkg-config libpng >= 1.2.9), PNG quantisation to 8 bit: yes, TIFF load/save with libtiff: yes (pkg-config libtiff-4), image pyramid save: yes, HEIC/AVIF load/save with libheif: yes (dynamic module: no), WebP load/save with libwebp: yes, PDF load with PDFium:  no, PDF load with poppler-glib: no (dynamic module: no), SVG load with librsvg-2.0: yes, EXR load with OpenEXR: no, OpenSlide load: no (dynamic module: no), Matlab load with matio: no, NIfTI load/save with niftiio: no, FITS load/save with cfitsio: no, Magick package: none (dynamic module: no), Magick API version: none, load with libMagickCore: no, save with libMagickCore: no"

/** 
 * VIPS_SONAME:
 *
 * The name of the shared object containing the vips library, for example
 * "libvips.so.42", or "libvips-42.dll".
 */

#include "soname.h"

/* Not really anything to do with versions, but this is a handy place to put
 * it.
 */
#define VIPS_EXEEXT ".exe"
#define VIPS_ENABLE_DEPRECATED 0

#endif /*VIPS_VERSION_H*/
