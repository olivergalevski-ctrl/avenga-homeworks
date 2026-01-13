
🌌 MISSION: PROJECT GALACTIC LEDGER
System: Deep-Space Transaction Protocol (DSTP-4) Constraints: No Loops, No Classes, No DOM, No External Libraries. Target Length: 2,000 - 3,000 Lines of JavaScript.

📜 The Challenge
You are the lead engineer for a space colony banking system. Due to cosmic radiation, the "Iteration Chip" (Loops) and the "Blueprint Module" (Classes) on the ship's computer have fried. You must build a Multi-Tiered Banking Ecosystem using only Static Objects, Deep Recursion, and Manual Validation.

🛠 Architecture Requirements
1. The Multi-Entity Database
Your bankData cannot just be users. It must include Sectors, Branches, and Currencies.

3 Different Sectors: Mars, Earth, and The Belt.

Exchange Rates: You must manually code a "Currency Exchange Engine" that handles 4 different currencies (Credits, Gold, Oxygen-Tokens, and Scrip).

Transaction Fees: Every sector has different tax laws. You must write unique if/else logic for tax calculations based on which sector the sender and receiver are in.

2. The "Security Clearance" System (The Logic Bloat)
Instead of a simple PIN, implement a Multi-Factor Authentication (MFA) Sequence:

Phase 1: Username check.

Phase 2: PIN check.

Phase 3: "Secret Word" check (unique to each user).

Phase 4: A "Captcha" system: Generate two random numbers and ask the user to add them. Use if/else to check the result. If any phase fails, the user must be "locked" for that session, requiring a specific Admin-override function.

3. Features to Build (Manual Execution)
Inter-Planetary Transfers: If User A (Mars) sends money to User B (Earth), you must calculate the "Communication Delay Tax" and the "Currency Conversion."

Tiered Interest System: Write a recursive function that calculates 12 months of interest. Since you can't use a loop, the function must call itself 12 times, calculating monthly compound interest manually for each step.

The "Audit Trail" (Massive Recursion):

You must be able to "Search" the history.

Because you can't use .filter() or for, you must write a recursive search function that asks: "Is this the transaction you are looking for?" If no, it calls itself for the next index.

Batch Utility Payments: Users must be able to pay "Life Support," "Fuel," and "Internet" bills in one go. You must write a separate validation block for every single bill type.

4. The "Manual Search" Engine (The 2,000 Line Key)
In a normal app, finding a user is one line: users.find(). In this project, you must write a Recursive Binary Search from scratch using only if/else.

You must handle "User Not Found," "User Locked," "User Deleted," and "User Pending" as separate functional states with their own alert and prompt sequences.

🚩 Submission Rule
If I see a for loop, a while loop, or the word class, the entire project is a failure. You must solve every problem using Logic Flow alone.