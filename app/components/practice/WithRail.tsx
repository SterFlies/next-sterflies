export default function WithRail({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="with-rail">
      <div className="with-rail-main">{children}</div>
      <aside className="with-rail-aside" aria-label="Related resources">
        <div className="with-rail-aside-inner">{sidebar}</div>
      </aside>
    </div>
  )
}
