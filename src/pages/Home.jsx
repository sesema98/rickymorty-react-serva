import { useEffect, useState } from 'react';
import { getCharacters } from '../services/rmApi';

export default function Home() {
  const [data, setData] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await getCharacters(page);
      setData(res);
      setLoading(false);
    };
    load();
  }, [page]);

  return (
    <section className="container py-4">
      <div className="text-center mb-4">
        <h1>Rick & Morty Universe</h1>
        <p className="text-muted">Explora personajes del multiverso</p>
      </div>

      {loading ? (
        <div className="spinner-grow" role="status" style={{ marginInline: 'auto' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.results.slice(0, 6).map((c) => ( 
            <div className="col" key={c.id}>
              <div className="card h-100 shadow-sm">
                <img src={c.image} alt={c.name} className="card-img-top" style={{ height: 256, objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text mb-0"><strong>Status:</strong> {c.status}</p>
                  <small className="text-body-secondary"><strong>Species:</strong> {c.species}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <nav className="mt-4" aria-label="Home pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              Previous
            </button>
          </li>
          <li className="page-item"><button className="page-link active">{page}</button></li>
          <li className={`page-item ${page === data.info?.pages ? 'disabled' : ''}`}>
            <button className="page-link" disabled={page === data.info?.pages} onClick={() => setPage((p) => p + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
