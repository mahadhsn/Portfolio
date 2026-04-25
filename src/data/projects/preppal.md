PrepPal is a disaster awareness and emergency-support platform built at MacEngComp 2025, where it placed 3rd overall. The idea came from a simple observation: when a disaster strikes, most people don't know what to do or where to look. PrepPal changes that.

The app lets users scan images of emergency supply labels using GCP Vision, instantly identifying whether items are expired or safe to use. It also pulls live hazard data from USGS, NOAA, and NASA to give users real-time threat analysis for their location — earthquakes, hurricanes, wildfires — in under a second.

## How it works

The detection pipeline combines OCR, label matching, and localization to extract product and expiry data from noisy real-world images. We paired this with a rule-based validation layer on top of the model's output to reduce false positives and improve reliability by about 40%.

The global hazard layer queries multiple public APIs and aggregates the results into a unified risk score. We built this to be fast — most lookups complete in under 1 second even with three data sources.

## What I learned

Building under a time constraint forces you to make real prioritization calls. We cut features ruthlessly and focused on the two things that mattered most: fast image detection and reliable hazard data. The result was a cleaner product than if we'd tried to ship everything.
