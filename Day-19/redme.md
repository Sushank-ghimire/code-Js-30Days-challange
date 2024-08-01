# Regular Expressions In JavaScript

# Special Characters
Special characters have specific meanings:

. - Matches any character except newline
\d - Matches any digit (0-9)
\D - Matches any non-digit
\w - Matches any word character (alphanumeric + underscore)
\W - Matches any non-word character
\s - Matches any whitespace character
\S - Matches any non-whitespace character

# Quantifiers
Quantifiers specify how many times a character or group should be matched:

* - 0 or more times
+ - 1 or more times
? - 0 or 1 time
{n} - Exactly n times
{n,} - n or more times
{n,m} - Between n and m times

# Flags
Flags modify the behavior of the regular expression:
g - Global search
i - Case-insensitive search
m - Multi-line search
s - Allows . to match newline characters
u - Enables full Unicode support
y - Sticky search


# Groups and Ranges
Groups and ranges allow you to create complex patterns:

(pattern) - Capturing group
(?:pattern) - Non-capturing group
| - Alternation (OR)
[a-z] - Range of characters