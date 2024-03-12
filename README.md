# React-basic
Collection of daily React programs and exercises for learning and practicing React fundamentals

The program constitutes a simple text utility application built with React, emphasizing the functional component paradigm. It comprises three main components:

TextForm Component:
Implements state management using the useState hook to facilitate user interactions.
Features a text area where users can input text.
Provides a button to convert the input text to uppercase.
Handles text input changes and conversion to uppercase seamlessly.

App Component (App.js):
Acts as the central hub of the application.
Integrates and renders the Navbar and TextForm components.
Employs props to supply the Navbar component with a title and about text.
Passes a heading prop to the TextForm component for enhanced customization.

Navbar Component:
Utilizes functional components to streamline development.
Receives props such as title and aboutText to tailor its content.
Features a navigation bar with links and a search form for enhanced user navigation.
Establishes default values for title and aboutText props for robustness.

Overall, these components work together to create a simple text utility application with a navigation bar and a text input area where users can convert the entered text to uppercase. The application is structured using React and follows the functional component approach. It demonstrates the use of state management, props, and hooks in React.
12/3/2024
I have expanded the functionality of my TextForm component by adding several additional features for text manipulation:

1.Convert to Lower Case:
  I have implemented a function handleLoClick to convert the input text to lowercase when the corresponding button is clicked.

2.Convert to Title Case:
  I have introduced a new function handleTitleClick to convert the input text to title case.
  Title case capitalizes the first letter of each word in the text.

3.Convert to Sentence Case:
  Another new function handleSentenceCaseClick is added to convert the input text to sentence case.
  Sentence case capitalizes the first letter of each sentence in the text.
  
4.Convert to Alternative Case:
   I have implemented a function handleAltCaseClick to convert the input text to an alternative case.
  In this case, every other character's case is alternated, with odd-indexed characters being capitalized and even-indexed characters being lowercase.
  
5.Word and Character Count:
  I have included a section that displays the word count and character count of the input text.
  It calculates the estimated time to read the text based on the average reading speed.
  
6.Preview Section:
Lastly, I have added a preview section that displays the manipulated text after applying the chosen transformations.

These functionality of TextForm component, offering users more options for text formatting and analysis. Users can now easily convert text to various cases and receive useful metrics about their input text. These features enhance the utility and user experience of text utility application.
