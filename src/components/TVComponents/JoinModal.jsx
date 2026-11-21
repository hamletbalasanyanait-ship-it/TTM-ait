import { useEffect, useState } from 'react';
import JoinForm from './JoinForm';
import './JoinModal.css';

export default function JoinModal({ open, planName, onClose }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="join-modal__overlay" onClick={onClose}>
      <div
        className="join-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="join-modal__close" onClick={onClose} aria-label="Փակել">×</button>
        <h2>Միանալ՝ {planName}</h2>
        {sent ? (
          <p>Շնորհակալություն, մենք կկապվենք ձեզ հետ։</p>
        ) : (
          <JoinForm planName={planName} onSuccess={() => setSent(true)} />
        )}
      </div>
    </div>
  );
}