import "./styles.css";

export function MyProjects() {
  // const containerRef = useRef<HTMLUListElement | null>(null);
  // const isDown = false;

  // const handleMouseDown = (e) => {
  //   if (!containerRef || !containerRef.current) return;

  //   const slider = containerRef.current;
  //   const startPos = {
  //     left: slider.scrollLeft,
  //     top: slider.scrollTop,
  //     x: e.clientX,
  //     y: e.clientY,
  //   };
  // };

  // const handleMouseMove = (e) => {
  //   const dx = e.clientX - startPos.x;
  //   const dy = e.clientY - startPos.y;
  //   ele.scrollTop = startPos.top - dy;
  //   ele.scrollLeft = startPos.left - dx;
  //   updateCursor(ele);
  // };

  // const updateCursor = (ele) => {
  //   ele.style.cursor = "grabbing";
  //   ele.style.userSelect = "none";
  // };

  return (
    <section>
      <h3>Projects</h3>

      <ul
        className="projects__list"
        // ref={containerRef}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <div className="project__card">
              <span>Projeto {i}</span>
              <p>Descriçao do projeto lorem ipsum dorem </p>
              <small>algo small</small>
            </div>
          </li>
        ))}
        <span id="arrow__right">{">>"}</span>
      </ul>
    </section>
  );
}
