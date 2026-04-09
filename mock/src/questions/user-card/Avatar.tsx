interface Props {
  avatarURL?: string;
}

export default function Avatar(props: Props) {
  const placeholder =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwhNjfNzeW7QX54PcWQkrbRyt4LhKwj1LNg&s";

  return <img src={props.avatarURL ? props.avatarURL : placeholder} />;
}
