type SkillBadgeProps = {
  name: string;
};

export function SkillBadge({ name }: SkillBadgeProps) {
  return <span className="skill-badge">{name}</span>;
}
