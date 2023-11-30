import { WebLinks } from '../web-links/Index'

export const Footer = () => {
  return (
    <footer className="bg-[#f2f2f3]">
      <div className="container mx-auto px-1 py-4">
        <div className="grid grid-cols 3 gap-2">
          <h2>SITIO</h2>
          <ul className="flex flex-col gap-4">
            <WebLinks />
          </ul>
        </div>
      </div>
    </footer>
  )
}
