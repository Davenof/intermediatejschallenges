# intermediatejschallenges
 INFORMATION
<ul>
 <li>The JavaScript challenges below foster mastery for people who are between beginner and pro levels. See my <a href="https://github.com/Davenof/fundamentaljschallenges" target="_blank">fundamentaljschallenges repository</a> for fundamental challenges.</li>
 <li>See the <code>challenges.js</code> file in this repository for my solutions to the challenges. The challenges serial numbers in the file correspond with their numbers below.</li>
 </ul>
 
 <p>CHALLENGES</p>
 <ol>
    <li>
       <h3>reverseArray()</h3>
       <p>
         Write a function, <code>reverseArray()</code>, that takes in an array as an argument and returns a new array with the elements in the reverse order.
         <br><br>
         There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it.
       </p>
     <p> &nbsp; </p>
    </li>
    <li>
       <h3>greetAliens()</h3>
         Write a function, <code>greetAliens()</code>, that takes in an array of strings and uses a <code>for</code> loop to print a greeting with each  string in the array. You are not allowed to use <code>.forEach()</code>.
       <br><br>
         The greeting should take the following format: <br><br>
         <em>“Oh powerful <code>[stringElement]</code>, we humans offer our unconditional surrender!”</em>
     <p> &nbsp; </p>
    </li>
<li>
       <h3>convertToBaby()</h3>
       <p>
        Write a function, <code>convertToBaby()</code>, that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with <code>'baby '</code>. You are not allowed to use <code>map</code>.
       </p>
 <p> &nbsp; </p>
    </li>
    <li>
       <h3>smallestPowerOfTwo()</h3>
         Write a function, <code>smallestPowerOfTwo()</code>, which takes in an array. Within the function, create a new array called <code>results</code>. Then, loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using <code>.push()</code> to add it to results. It should print the returned array in the format: 
     <br><br>
     [ 8, 4, 16, 32 ]
     <p> &nbsp; </p>
    </li>
    <li>
       <h3>declineEverything() and acceptEverything()</h3>
       <p>
         Write a function <code>declineEverything()</code> that takes in an array of strings and, using <code>.forEach()</code>, loops through each element in the array and calls <code>politelyDecline()</code> with each of them.
<br><br>
The <code>.forEach()</code> function should apply <code>politelyDecline()</code> directly; it should NOT merely receive an argument function that uses <code>politelyDecline()</code>.
<br><br>
You can test your function by passing in the <code>veggies</code> array or by making your own array!
  <br><br>
        Write another function <code>acceptEverything()</code> that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: <br><br>
        <em>'Ok, I guess I will eat some [element].'</em>
<br><br>
You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the <code>veggies</code> array or by making your own array!
       </p>
     <p> &nbsp; </p>
    </li>
    <li>
       <h3>squareNums()</h3>
         Write a function, <code>squareNums()</code>, that takes in an array of numbers and, using <code>.map()</code>, returns an array with the square of each of the elements of that array.
<br><br>
You can test your function by passing in the <code>numbers</code> array or by making your own array!
     <p> &nbsp; </p>
    </li>
<li>
       <h3>shoutGreetings()</h3>
       <p>
        Write a function <code>shoutGreetings()</code> that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: <code>'heya'</code> will become <code>'HEYA!'</code>.
<br><br>
You can use any technique you want to accomplish this task.
<br><br>
You can test your function by passing in the <code>greetings</code> array or by making your own array!
       </p>
 <p> &nbsp; </p>
    </li>
    <li>
       <h3>sortYears()</h3>
         Write a function <code>sortYears()</code> that takes in an array of years, and, using the built-in <code>.sort()</code> method, returns that array with the years sorted in descending order.
<br><br>
You can test your function by passing in the <code>years</code> array or by making your own array of years!
     <p> &nbsp; </p>
    </li>
   <li>
    <h3>justCoolStuff()</h3>
       <p>
        Write a function <code>justCoolStuff()</code> that takes in two arrays of strings, and, using the built-in <code>.filter()</code> method, returns an array with the items that are present in both arrays.
<br><br>
You can test your function by passing in the <code>myStuff</code> and <code>coolStuff</code> arrays or by making arrays of your own!
       </p>
 <p> &nbsp; </p>
    </li>
    <li>
       <h3>isTheDinnerVegan()</h3>
         Write a function <code>isTheDinnerVegan()</code> that takes in an array of food objects in the format:
<br><br>
 {name: 'cabbage', source: 'plant' }
 <br><br>
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
     <p> &nbsp; </p>
    </li>
   <li>
       <h3>sortSpeciesByTeeth()</h3>
    Write a function <code>sortSpeciesByTeeth()</code> that takes in an array of species objects in the format:
<br><br>
 {speciesName: 'shark', numTeeth: 50 }
 <br><br>
and sorts the array in ascending order based on the average number of teeth that species possesses (<code>numTeeth</code>) .
<br><br>
You’ll need to access each object’s <code>.numTeeth</code> property. Feel free to either write a named comparison function, or use an anonymous function for your argument to <code>.sort()</code>.
<br><br>
You can test your function by passing in the <code>speciesArray</code> array or by making your own!
     <p> &nbsp; </p>
    </li>
 <li>
       <h3>findMyKeys()</h3>
       <p>
        Write a function, <code>findMyKeys()</code>, that takes in an array of strings which may or may not contain <code>'keys'</code>. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return <code>-1</code>.
<br><br>
You can use any technique you want to accomplish this task.
<br><br>
You can test your function by passing in the <code>randomStuff</code> array or by making your own array!
       </p>
 <p> &nbsp; </p>
    </li>
   <li>
       <h3>dogFactory()</h3>
       <p>
        Write a function, <code>dogFactory()</code>. It should:
         <ul>
            <li>have 3 parameters: <code>name</code>, <code>breed</code>, and <code>weight</code> (in that order)</li>
            <li>expect <code>name</code> and <code>breed</code> to be strings</li>
            <li>expect <code>weight</code> to be a number</li>
            <li>return an object</li>
            <li>have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in</li>
         </ul>
       </p>
       <p> &nbsp; </p>
   </li>
   <li>
       <h3>factorial()</h3>
       <p>
        Write a function <code>factorial()</code> that takes a number as an argument and returns the factorial of the number.
        <br><br>
       Example:
       <br><br>
       factorial(6); <br>
       <code>returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720</code>
       <br><br>
       Assume only positive numbers will be given as an argument for the factorial() function.
       </p>
       <p> &nbsp; </p>
   </li>
   <li>
       <h3>subLength()</h3>
       <p>
        Write a function <code>subLength()</code> that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
        <br><br>
      Examples:
      <br><br>
      <ul>
         subLength('Saturday', 'a'); // returns 6 <br>
         subLength('summer', 'm'); // returns 2 <br>
         subLength('digitize', 'i'); // returns 0 <br>
         subLength('cheesecake', 'k'); // returns 0
      </ul>
       </p>
       <p> &nbsp; </p>
   </li>
     <li>
       <h3>groceries()</h3>
       <p>
        Write a function <code>groceries()</code> that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word <code>'and'</code>. Make sure spaces (<code>' '</code>) are inserted where they are appropriate.
   <br><br>
Examples:
<ul>
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ); <br>
 <em>// returns 'Carrots, Hummus, Pesto and Rigatoni'</em>
 <br><br>
groceries( [{item: 'Bread'}, {item: 'Butter'}] ); <br>
 <em>// returns 'Bread and Butter'</em>
 <br><br>
groceries( [{item: 'Cheese Balls'}] ); <br>
 <em>// returns 'Cheese Balls'</em>
       </p>
   </li>
  </ol>
