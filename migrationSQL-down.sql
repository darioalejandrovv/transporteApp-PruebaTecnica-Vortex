
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
