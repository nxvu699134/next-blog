import { slug } from "github-slugger";

const regexPattern = new RegExp(/(?<flag>#{1,6})\s+(?<content>.+)/g);

interface TocNode {
  h: string;
  text: string;
  children: Array<TocNode>;
}

const MIN_HEADER = "2"; // h1 is for page title

const constructTree = (nodes: Array<TocNode>) => {
  const stack = [];

  for (let i = 0; i < nodes.length; i++) {
    if (stack.length === 0) {
      stack.push(nodes[i]);
      continue;
    }

    if (nodes[i].h > stack[stack.length - 1].h) {
      stack[stack.length - 1].children.push(nodes[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1].h >= nodes[i].h) {
        stack.pop();
      }
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(nodes[i]);
      }
    }
    stack.push(nodes[i]);
  }

  return nodes.filter((hd) => hd.h === MIN_HEADER);
};

const renderTocNode = (node: TocNode) => {
  return (
    <li>
      <a className="toc-link" href={`#${slug(node.text)}`}>
        {node.text}
      </a>
      {node.children.length > 0 && (
        <ol>{node.children.map((child) => renderTocNode(child))}</ol>
      )}
    </li>
  );
};

export const generateTOC = (source: string) => {
  const headings = Array.from(source.matchAll(regexPattern)).map((m) => {
    const { groups } = m;
    const tocNode: TocNode = {
      h: `${groups?.flag.length}`,
      text: groups?.content || "",
      children: [],
    };
    return tocNode;
  });

  const tree = constructTree(headings);

  return <ol>{tree.map((t) => renderTocNode(t))}</ol>;
};
