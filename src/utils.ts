export const uuid = () =>
  "xxxxx".replace(/[xy]/g, (match, r) =>
    ("x" == match ? (r = (Math.random() * 16) | 0) : (r & 0x3) | 0x8).toString(
      16
    )
  );
