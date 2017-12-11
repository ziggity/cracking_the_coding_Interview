
// Check this regex and see if it's working /\(?\d{3}\)?-\d{3}-\d{4}/ to find phone nums

There's a few things, as not everyone writes phone number with dashes. So we could add in this line to search for spaces instead of validating if a  '-' exists or a period '.'. 

The thing we need to add to the current regex is a character class that covers the things we just mentioned: [-./s]? 

Let me explain what the regex is doing first: /\(?\d{3}\)?-\d{3}-\d{4}/

/\(?  this escapes the '(' and a '?' checks if '(' exists '0 or 1'. Also this '?' says its optional, so it may or may not be there. 

\d{3} this checks for 3 digits, no more no less. 

\)? Check for the closing parenthesis ')' it's optional so not mandatory. 

So here's the final regex to get it working properly: \(?\d{3}\)?[-.\s]?\d{3}[-./s]?\d{4}
