const Footer = ({ todo }) => {
  const completedItemNumber = todo.filter((item) => item.status).length;
  const percentage = (completedItemNumber / todo.length) * 100;

  let content;
  if (todo.length) {
    content = `You have ${
      todo.length
    } items on Your Tour Plan and You already complete items ${completedItemNumber} (${percentage.toFixed()}%)`;
  } else {
    content = "Start adding some item in your Tour List";
  }
  return <div className="footer">{content}</div>;
};

export default Footer;
