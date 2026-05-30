SecureVault is a cybersecurity system built in 7 hours at MacEngComp 2024, where it placed 2nd among 30+ teams. It combines facial recognition, a password manager, and file encryption into a single application.

## What it does

The face recognition module uses OpenCV to authenticate users before granting access. The password manager stores credentials in an encrypted SQLite database. File encryption lets users protect arbitrary files with AES encryption.

The challenge was making three distinct security features feel like a coherent product rather than three separate tools bolted together.

## Building under pressure

Seven hours is not a lot of time to build something secure. We had to make fast decisions: which features to prioritize, where to cut corners that wouldn't affect security, and how to split the work across the team.

We used Flask for the backend and kept the UI minimal so we could spend more time on the core security logic.

## What I learned

Security is mostly about trust boundaries: knowing what you trust, what you don't, and making those assumptions explicit. Even in a hackathon context, building with that mindset made the system meaningfully more robust than if we'd just shipped the feature surface.
