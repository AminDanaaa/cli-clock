# cli-clock
A simple live clock in cli using JavaScript in nodejs env

# Notes
tried to make it as efficient as possible, using process.std.write() insted of console.log() to be able to only clear and replace the same line since it's more efficient than clearing the whole console every 1 second. and that helps the purpose explained in the next next paragraph.

the purpose of this simple script is using it in future cli projects where we need a live clock (IDK maybe next to a progress bar would be useful?).

in a GUI we don't need most of these probably tho :D

Peace.