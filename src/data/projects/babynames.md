A Bash script that processes US baby name ranking data from the Social Security Administration and outputs ranked lists based on user-specified criteria — year, gender, or name prefix.

## What it does

The SSA publishes annual datasets of baby name popularity going back to 1880. The script parses these files, filters by the given criteria, and formats the output cleanly in the terminal. It handles edge cases like missing data years and invalid inputs.

## Why Bash

Shell scripting is the right tool for text processing pipelines. The combination of standard Unix utilities — `grep`, `awk`, `sort`, `cut` — makes it concise and fast for exactly this kind of structured text manipulation.

Writing it in Bash also meant no dependencies: the script runs anywhere with a standard shell.

## What I learned

Bash rewards you for knowing your Unix tools well. Once you understand the composability model — small programs that do one thing and pipe output to the next — you can accomplish a lot with very little code.
