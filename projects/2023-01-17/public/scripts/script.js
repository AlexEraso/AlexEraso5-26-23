// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

// Add the new H1 element to the body.
body.append(q1);

// Create a new P element.
const a1 = document.createElement('p');

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);

// Add the new P element to the body.
body.append(a1);

const q2 = document.createElement('h1');

q2.append(document.createTextNode('What about using HTML for GUIs?'));

body.append(q2);

const a2 = document.createElement('p');

a2.append(
  document.createTextNode(`
  HTML can be used to create user interfaces for web applications, but it is
   primarily designed as a markup language for creating structured documents 
   to be displayed in web browsers. While it can be used to create basic user 
   interfaces, it is not typically considered a good choice for creating complex,
    interactive user interfaces. Other technologies such as JavaScript and CSS 
    are typically used in conjunction with HTML to create more advanced user
     interfaces for web applications. Additionally, there are other technologies
      such as Electron, React Native and NativeScript that allow to create 
      cross-platform desktop and mobile apps using web technologies such as HTML,
       CSS, and JavaScript.
`),
);

body.append(a2);
//newer thing 

const q4 = document.createElement('h1');

q4.append(document.createTextNode('What are some of the main elements of HTML?'));

body.append(q4);

const a4 = document.createElement('p');

a4.append(
  document.createTextNode(`
  Some of the main elements of HTML include:
`),
);

body.append(a4);

//I hate lists

const list = document.createElement('ol');

const otherList = document.createElement('li');

const code = document.createElement('code');

code.append('<html>')
otherList.append(code)
otherList.append(document.createTextNode(': This is the root element of an HTML document, and it contains all of the other elements.'));
list.append(otherList)


//I really hate lists 1 

const otherList1 = document.createElement('li');

const code1 = document.createElement('code');

code1.append('<head>')
otherList1.append(code1)
otherList1.append(document.createTextNode(": This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab."));
list.append(otherList1)


//I really hate lists 2 

const otherList2 = document.createElement('li');

const code2 = document.createElement('code');

code2.append('<body>')
otherList2.append(code2)
otherList2.append(document.createTextNode(": This element contains the content of the document that is displayed in the browser window."));
list.append(otherList2)
body.append(list)


//I really hate lists 3 

const otherList3 = document.createElement('li');

const code3 = document.createElement('code');

code3.append('<h1> to <h6>')
otherList3.append(code3)
otherList3.append(document.createTextNode(": These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest."));
list.append(otherList3)
body.append(list)

//I really hate lists 4 

const otherList4 = document.createElement('li');

const code4 = document.createElement('code');

code4.append('<p>')
otherList4.append(code4)
otherList4.append(document.createTextNode(": This element is used for paragraphs of text."));
list.append(otherList4)
body.append(list)

//I really hate lists 5 

const otherList5 = document.createElement('li');

const code5 = document.createElement('code');

code5.append('<a>')
otherList5.append(code5)
otherList5.append(document.createTextNode(": This element is used for hyperlinks, which allow users to navigate between pages on the web."));
list.append(otherList5)
body.append(list)

//I really hate lists 6

const otherList6 = document.createElement('li');

const code6 = document.createElement('code');

code6.append('<img>')
otherList6.append(code6)
otherList6.append(document.createTextNode(": This element is used to embed images in a web page."));
list.append(otherList6)
body.append(list)

//I really hate lists 7 

const otherList7 = document.createElement('li');

const code7 = document.createElement('code');

code7.append('<ul> and <ol>')
otherList7.append(code7)
otherList7.append(document.createTextNode(": These elements are used for unordered and ordered lists, respectively."));
list.append(otherList7)
body.append(list)

//I really hate lists 8

const otherList8 = document.createElement('li');

const code8 = document.createElement('code');

code8.append('<li>')
otherList8.append(code8)
otherList8.append(document.createTextNode(": This element is used for list items."));
list.append(otherList8)
body.append(list)

//I really hate lists 9 

const otherList9 = document.createElement('li');

const code9 = document.createElement('code');

code9.append('<div> and <span>')
otherList9.append(code9)
otherList9.append(document.createTextNode(": These elements are used for grouping and applying styles to elements on a web page."));
list.append(otherList9)
body.append(list)

//new thing 

const q3 = document.createElement('h1');

q3.append(document.createTextNode('Can you find a picture of the inventor of the web?'));

body.append(q3);

const a3 = document.createElement('p');

const image = document.createElement('img')

image.setAttribute('src', "/images/tim-berners-lee.jpg", 'alt', "A young Tim Berner-Lee")

body.append(image);

a3.append(
  document.createTextNode(`
  I'm sorry, I am a text based model and I am not able to find or show images. 
  However, I can tell you that the inventor of the World Wide Web (WWW) is Sir 
  Tim Berners-Lee. He is a British computer scientist and is considered to be 
  the inventor of the World Wide Web. He proposed and developed the first 
  successful communication between a Hypertext Transfer Protocol (HTTP) client
   and server via the Internet in 1989. He also created the first web browser,
    called WorldWideWeb, and the first web server, called httpd. He also wrote 
    the first version of the HTML language, which provided the structure for 
    web pages. He is currently working on a decentralized web project called Solid.
`),
);

body.append(a3);

const credits = document.createElement('div')

credits.setAttribute('class' , 'credits')

const textcredits = document.createElement('p')

textcredits.append(document.createTextNode('Text from 2023-01-14 conversation with '))

credits.append(textcredits)

const chatgpt = document.createElement('a')

credits.append(chatgpt)

chatgpt.setAttribute('href' , 'https://chat.openai.com/chat')

const credits1 = document.createElement('p')

credits1.append(document.createTextNode('Photo of a young Tim Berners-Lee from '))

credits.append(credits1)

const flickr = document.createElement('a')

flickr.setAttribute('href' , 'https://www.flickr.com/photos/itupictures/16662336315')

credits.append(flickr)

const credits2 = document.createElement('p')

credits2.append(document.createTextNode('no thanks to ChatGPT. ('))

credits.append(credits2)

const creativecommons = document.createElement('a')

creativecommons.setAttribute('href' , 'https://creativecommons.org/licenses/by/2.0/')

credits.append(creativecommons)

const credits3 = document.createElement('p')

credits3.append(document.createTextNode(')'))

credits.append(credits3)

body.append(credits)



