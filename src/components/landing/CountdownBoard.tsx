import { pad2, useCountdown } from '../../hooks/useCountdown'

export function CountdownBoard() {
  const { days, hours, minutes, seconds, done } = useCountdown()
  const label = done ? 'NEXT PICKS LOCK IN' : 'KICKOFF IN'

  const units = [
    { value: pad2(days), label: 'DAYS' },
    { value: pad2(hours), label: 'HRS' },
    { value: pad2(minutes), label: 'MIN' },
    { value: pad2(seconds), label: 'SEC' },
  ]

  return (
    <div className="rwc-countdown">
      <div className="rwc-countdown__panel">
        <span className="rwc-countdown__label">{label}</span>
        <div className="rwc-countdown__digits">
          {units.map((unit, index) => (
            <div key={unit.label} className="rwc-countdown__unit-group">
              <div className="rwc-countdown__unit">
                <span className="rwc-countdown__digit">{unit.value}</span>
                <span className="rwc-countdown__unit-label">{unit.label}</span>
              </div>
              {index < units.length - 1 ? (
                <span className="rwc-countdown__separator" aria-hidden="true">
                  :
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="rwc-countdown__scanlines" aria-hidden="true" />
      </div>
    </div>
  )
}
