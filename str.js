//library for string manipulation. Arguments marked with * are optional

/*
 Slices a string from start to end with step steps.
 Arguments:
  - string{string; string.length > 0} - the string to be sliced
  - *start{int >= 0} - where to start the slicing (default 0)
  - *stop{int > 0} - where to stop slicing (default string.length)
  - *step{int > 0} - the step by which take the characters (default 1)
 Returns:
   {string} the sliced string
*/
function slice(string, start, stop, step){
  if(start == undefined){
    start = 0;
  }
  if(stop == undefined){
    stop = string.length;
  }
  if(step == undefined){
    step = 1;
  }
  var res = [];
  for(var i = start; i < stop; i += step){
    res.push(string[i]);
  }
  return res.join('');
}


/*
 Checks if the string starts with a letter or sequence of letters or not.
 Arguments:
  -s{string; string.length > 0} - the string to be checked
  -l{string; string.length > 0} - the sequence of letters that string will be checked with
 Returns:
   {bool} whether the string starts with that sequence of letters or not
*/
function startswith(s, l){
  return slice(s, 0, l.length) == l;
}


/*
 Capitalizes the first letter of a string.
 Arguments:
  - s{string; s.length > 0} - the string to be capitalized
 Returns:
   {string} the capitalized string
*/
function capitalize(s){
  return s[0].toUpperCase() + slice(s, 1);
}


/*
 Gives a string multiplied t times.
 Arguments:
  - s{string; s.length > 0} - the string to be multiplied
  - t{int; t>0} - how many times it has to be multiplied
 Returns:
   {string} the multiplied string
*/
function times(s, t){
  var res = '';
  for(var i = 0; i < t; i++){
    res+=s;
  }
  return res;
}


/*
 Centers a string in length length with padding padding.
 Arguments:
  - s{string; s.length > 0} - the string to be centered
  - length{int; length>s.length; !length-s.length%2} - how many times it has to be multiplied
  - padding{string; padding.length == 1} - the padding with which fill the space (default = ' ')
 Returns:
   {string} the centered string
*/
function center(s, length, padding){
  if(padding == undefined){
    padding = ' ';
  }
  return times(padding, (length - s.length)/2) + s + times(padding, (length - s.length)/2);
}


/*
 Counts how many times a substring appears in a string.
 Arguments:
  - string{string; string.length > 0} - the string to be counted
  - s{string; s.length > 0} - the substring to be counted
 Returns:
   {int} the number of times the substring appears in the string
*/
function count(string, s){
  var c = 0;
  for(var i = 0; i <= string.length - s.length; i++){
    if(slice(string, i, i+s.length) == s){
      c++;
    }
  }
  return c;
}


/*
 Reverses a string.
 Arguments:
  - string{string; s.length > 0} - the string to be reversed
 Returns:
   {str} - the reversed string
*/
function reverse(s){
  var res = '';
  for(var i = s.length-1; i >= 0; i--){
    res+=s[i];
  }
  return res;
}


/*
 Checks if the string ends with a letter or sequence of letters or not.
 Arguments:
  -s{string; s.length > 0} - the string to be checked
  -l{string; l.length > 0} - the sequence of letters that string will be checked with
 Returns:
   {bool} whether the string ends with that sequence of letters or not
*/
function endswith(s, l){
  return startswith(reverse(s), l);
}

/*
 Returns the first occurence of l in s.
 Arguments:
  -s{string; s.length > 0} - the string to be checked
  -l{string; l.length > 0} - the sequence of letters that string will be checked with
 Returns:
   {int} - the index at which l occurs in s. Returns -1 if l is not found
*/
function find(s, l){
  for(var i = 0; i < s.length; i++){
    if(s[i] == l){return i}
  }
  return -1;
}
function index(s, l){return find(s, l)}


/*
 Formats the string evaluating expressions between parenthesis.
 Arguments:
  -s{string; s.length > 0} - the string to be formatted
 Returns:
   {string} the formatted string
*/
function format(s){
  while(find(s, '{') != -1){
    s = slice(s, 0, find(s, '{')) + eval(slice(s, find(s, '{')+1, find(s, '}'))) + slice(s, find(s, '}') + 1);
  }
  return s;
}

/*
 Replaces all the occurences of r in s by t.
 Arguments:
  -s{string; s.length > 0} - the string to be replaced
  -r{string; r.lenght > 0} - the substring to be looking for
  -t{string; t.length > 0} - the substring to be replaced
 Returns:
   {string} the replaced string
*/
function replace(s, r, t){
  var res = [];
  var skip = 1;
  for(var i = 0; i < s.length - r.length + 2; i+=skip){
    skip = 1;
    if(s.substring(i, i+r.length) == r){
      res.push(t);
      skip = r.length;
    }
    else{
      res.push(s[i]);
    }
  }
  return res.join('');
}


/*
 Transforms the text into Pig Latin.
 Arguments:
  -s{string; s.length > 0} - the string to be pigified
 Returns:
   {string} the pigified string
*/
function pigify(s){
  
}
