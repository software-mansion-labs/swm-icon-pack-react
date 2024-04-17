import { Air } from './icons/broken'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
}

export default function SwmIcon({ color, style, ...props }: Props) {
  return (
    <div style={{ ...style, color }} {...props}>
      <Air width={50} height={50} />
    </div>
  );
}
