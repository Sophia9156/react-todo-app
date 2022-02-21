

export default function Footer() {
  const date = new Date();
  return(
    <footer>
      <span>&copy; {date.getFullYear()} Created by Sophia. All rights reserved. </span> 
    </footer>
  )
}