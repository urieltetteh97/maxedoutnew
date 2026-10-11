function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="font-ui">© {new Date().getFullYear()} Fieldstone. All rights reserved.</p>
        <p className="font-ui">Architecture, documented.</p>
      </div>
    </footer>
  )
}

export default Footer
