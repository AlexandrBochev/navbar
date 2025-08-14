## Figma URL

[Navbar](https://www.figma.com/file/Se61eLfK50x0JatmdSdLzL/Navbar?node-id=0%3A1&t=iDQ4v9bsLeblAFUK-1)

## Steps

#### Data

Check the data.jsx file and find two arrays: one for links and one for social icons. Notice how icons from react-icons can be used directly in the data structures. Just make sure in Vite to use .jsx file extension

#### Initial Approach

Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

#### Fixed Approach

Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

#### Dynamic Approach

Use the useRef and getBoundingClientRect() function, to get exact height of links

[Javascript Nuggets - Width/Height](https://www.youtube.com/watch?v=v8YENdbDv1w&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=20)

#### Complete App

Finally, add social links and CSS to render the Navbar on the big screen.

#### Application Flow

The flow of the application should look something like this:

- Check the data.js file and find two arrays: one for links and one for social icons.

- Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

- Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

- Use the useRef and getBoundingClientRect() function, to get exact height of links

- Add social links and CSS to render the Navbar on the big screen.

#### Initial Approach

Navbar.jsx

```js
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

```css
nav {
  background: var(--white);
  box-shadow: var(--shadow-1);
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.nav-toggle {
  font-size: 1.5rem;
  color: var(--primary-500);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
}
.nav-toggle:hover {
  color: var(--primary-700);
  transform: rotate(90deg);
}
.logo {
  height: 40px;
}
.links a {
  color: var(--grey-700);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
}
.links a:hover {
  background: var(--primary-100);
  color: var(--primary-500);
  padding-left: 1.5rem;
}
```

#### Fixed Approach

```css
.links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
.show-container {
  height: 10rem;
}
```

```js
<div
  className={showLinks ? 'links-container show-container' : 'links-container'}
>
  <ul className='links'>....links</ul>
</div>
```

#### Dynamic Approach

```css
.links-container {
  overflow: hidden;
  transition: var(--transition);
}
```

```js
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

#### Complete APP CSS

```css
.social-icons {
  display: none;
}
@media screen and (min-width: 800px) {
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-header {
    padding: 0;
  }
  .nav-toggle {
    display: none;
  }
  .links-container {
    height: auto !important;
  }
  .links {
    display: flex;
    gap: 0.5rem;
  }
  .links a {
    padding: 0;
  }
  .links a:hover {
    padding: 0;
    background: transparent;
  }
  .social-icons {
    display: flex;
    gap: 0.5rem;
  }
  .social-icons a {
    color: var(--primary-500);
    transition: var(--transition);
  }
  .social-icons a:hover {
    color: var(--primary-300);
  }
}
```


## sidebar
## Figma URL

[Sidebar and Modal](https://www.figma.com/file/cFyEiRb6jQdVIVK9M5eoe6/Sidebar-and-modal?node-id=0%3A1&t=sg6VSjSNK3T1Uy8P-1)

## Steps

#### Explore Data

Navigate to data.jsx and explore arrays

#### Create Components

Create three components: Home, Modal, and Sidebar. Render them in App.jsx.

#### Global Context

Setup global context and don't forget to implement a custom hook.

#### Global State Values

Setup two state values, both booleans, isSidebarOpen and isModalOpen. Also, set up four functions to open and close the modal and sidebar. Make all of these values available in the application.

#### Home Component

In Home, set up two buttons and get two functions from global context, openSidebar and openModal. Once the user clicks the button, invoke one of the functions. Set up CSS for the buttons.

#### Modal and Sidebar Component

Create a Modal component and add modal CSS. Repeat the same steps with the Sidebar component.

The flow of the application should look something like this:

- Setup global context and implement a custom hook.

- Setup two state values, both booleans, isSidebarOpen and isModalOpen. Also, set up four functions to open and close the modal and sidebar. Make all of these values available in the application.

- Create three components: Home, Modal, and Sidebar. Render them in App.jsx.

- In Home, set up two buttons and get two functions from global context, openSidebar and openModal. Once the user clicks the button, invoke one of the functions. Set up CSS for the buttons.

- Create a Modal component and add modal CSS. Repeat the same steps with the Sidebar component.

```css
main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey-100);
}
.sidebar-toggle {
  position: fixed;
  top: 2rem;
  left: 3rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  transition: var(--transition);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/*
=============== 
Modal
===============
*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
}
/* OPEN/CLOSE MODAL */
.show-modal {
  opacity: 1;
  transition-property: opacity;
  transition-duration: 2s;
  visibility: visible;
  z-index: 10;
}
.modal-container {
  background: var(--white);
  border-radius: var(--borderRadius);
  width: 90vw;
  height: 30vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
}
.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--red-dark);
  cursor: pointer;
}

/*
=============== 
Sidebar
===============
*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(---red-dark);
  transition: var(--transition);
  transform: translate(-100%);
}
.show-sidebar {
  transform: translate(0);
}
@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}
.close-btn {
  font-size: 1.75rem;
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  cursor: pointer;
  color: var(--red-dark);
}

.logo {
  height: 40px;
}

.links a {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--grey-700);
  transition: var(--transition);
  letter-spacing: var(--letterSpacing);
}

.links a:hover {
  background: var(--grey-100);
  color: var(--grey-800);
}
.links a svg {
  font-size: 1.5rem;
  color: var(--grey-500);
  margin-right: 1rem;
  transition: var(--transition);
}
.links a:hover svg {
  color: var(--grey-600);
}
.social-links {
  justify-self: center;
  display: flex;
  padding-bottom: 2rem;
}
.social-links a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: var(--primary-500);
  transition: var(--transition);
}
.social-links a:hover {
  color: var(--primary-800);
}
```
