-- UP -----------------------------------------------------------------------
-- Migración para la tabla Conductor
CREATE TABLE public.Conductor (
  id serial PRIMARY KEY,
  identificacion character varying(11) NOT NULL,
  apellido character varying(20),
  nombre character varying(20) NOT NULL,
  telefono character varying(20) NOT NULL,
  direccion character varying(50),
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER NOT NULL DEFAULT 0,
  updated_by INTEGER NOT NULL DEFAULT 0
);

-- Migración para la tabla Pedido
CREATE TABLE public.Pedido (
  id serial PRIMARY KEY,
  tipo_pedido character varying(20),
  direccion character varying(50) NOT NULL,
  conductor_id integer NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER NOT NULL DEFAULT 0,
  updated_by INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT fk_pedido_conductor FOREIGN KEY (conductor_id) REFERENCES public.Conductor(id)
);

-- Migración para la tabla Vehiculo
CREATE TABLE public.Vehiculo (
  id serial PRIMARY KEY,
  modelo character varying(4) NOT NULL,
  placa character varying(7) NOT NULL UNIQUE,
  capacidad character varying(7),
  conductor_id integer,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER NOT NULL DEFAULT 0,
  updated_by INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT fk_vehiculo_conductor FOREIGN KEY (conductor_id) REFERENCES public.Conductor(id)
);

-- DOWN -----------------------------------------------------------------------

-- Eliminar restricciones de clave externa en la tabla Vehiculo
ALTER TABLE IF EXISTS public.Vehiculo DROP CONSTRAINT IF EXISTS fk_vehiculo_conductor;

-- Eliminar restricciones de clave externa en la tabla Pedido
ALTER TABLE IF EXISTS public.Pedido DROP CONSTRAINT IF EXISTS fk_pedido_conductor;

-- Eliminar la tabla Vehiculo
DROP TABLE IF EXISTS public.Vehiculo;

-- Eliminar la tabla Pedido
DROP TABLE IF EXISTS public.Pedido;

-- Eliminar la tabla Conductor
DROP TABLE IF EXISTS public.Conductor;
