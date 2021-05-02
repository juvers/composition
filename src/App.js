const Left = () => {
  return <>This is the left pane</>;
};

const Right = () => {
  return <>This is the right pane</>;
};
const Child = ({ children, chExtra, left, right, title, message }) => {
  return (
    <>
      {title}
      {children}
      <hr />
      {chExtra.map((x) => (
        <p key={x}>{x}</p>
      ))}
      <div style={{ float: "left" }}>{left}</div>
      <div style={{ float: "right" }}>{right}</div>
    </>
  );
};

export default function App({ extra }) {
  return (
    <div className="App">
      <Child
        chExtra={extra}
        left={<Left />}
        right={<Right />}
        title="Header title"
        message="This is the message from parent"
      >
        <h2>Child Header</h2>
        <div>Inside child</div>
        {extra.map((x) => (
          <p key={x}>{x}</p>
        ))}
      </Child>
    </div>
  );
}

