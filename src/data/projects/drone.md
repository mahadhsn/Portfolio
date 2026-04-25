This project was a second-year software engineering assignment that turned out to be one of the more satisfying design challenges I've worked through. The goal: build a controller for a simulated drone that needed to locate and rescue another drone in distress, navigating an unknown environment.

## The design challenge

The interesting constraint was that the rescue drone had no prior knowledge of the map. It had to explore, avoid obstacles, and make decisions in real time. I modelled this using a state machine combined with the Strategy pattern — the drone's behaviour could switch dynamically based on what it sensed.

States handled things like exploring, approaching a target, and returning to base. Strategies handled the specific movement logic within each state. The separation made it easy to reason about the system and swap out movement logic without touching the state transitions.

## What I took away

This was one of the first times I applied design patterns to a problem that genuinely needed them rather than forcing them in. The State and Strategy combination wasn't just academic — it made the code easier to test, easier to extend, and easier to debug when the drone did something unexpected.
