# Landing Page Project

## Content
* Build Nav Steps
* Get the active Section
* Burger menu
* Notes
* Resourses

### Build Nav Steps:
* Query the all sections and store the list in variable.
* Use forEach on the list Variable.
* Create (1 li and 1 a and 1 textNode ) for each section in the list.
* Extract the data-nav value from the section and store it in variable.
* add this variable which contains the text to the link as (Text Content, ID or data-nav value)
* Use appendChild on the Fragment inside the loop.
* After the loop end append that Fragment to the (ul).
* Add EventListener to the links and use (scrollIntoView()).

### Get the active Section:
* I used intersection observer API.
* Use forEach() method on the sections list inside the callback to determine the active section 
* Inside it use forEach() method on the links list and check by the value of data-nav attribute which link refer to the active section and add the active-class to it after removing this active class from the other links 

### Burger menu
- At first make the whole page responsive by using media query 
- I made a button contain the burger font awesome icon and changed in the style sheet file   
- make the burger menu dynamic by using javascript 


### Notes
- I struggled so much in finding a resource to learn the (intersection observer API) method but not found a satisfying one yet so I asked the tuters help a lot in this part whicl I was writing my code and when I was trying it and finding that it is not working I submitted my code to the community twice and they helped me to write my code in a right and clean way which I am so grateful for. 

### Resources
- As I mentioned before I was searching for every single piece of information to write a working code and through this process I used Youtube, Google, MDN documentations, W3 Schools and a lot of websites seeking for any information  
