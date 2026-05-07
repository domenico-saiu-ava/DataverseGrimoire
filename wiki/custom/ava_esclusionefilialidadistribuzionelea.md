---
logical: "ava_esclusionefilialidadistribuzionelea"
display: "ava_esclusionefilialidadistribuzionelea"
entitySetName: "ava_esclusionefilialidadistribuzioneleaset"
primaryId: "ava_esclusionefilialidadistribuzioneleaid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ava_esclusionefilialidadistribuzionelea

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_esclusionefilialidadistribuzionelea` |
| Display name | ava_esclusionefilialidadistribuzionelea |
| Schema name | `ava_EsclusioneFilialidaDistribuzioneLea` |
| Entity set (Web API) | `ava_esclusionefilialidadistribuzioneleaset` |
| Primary id attribute | `ava_esclusionefilialidadistribuzioneleaid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/ava_esclusionefilialidadistribuzioneleaset?$select=&$top=10
GET /api/data/v9.2/ava_esclusionefilialidadistribuzioneleaset(<guid>)
POST /api/data/v9.2/ava_esclusionefilialidadistribuzioneleaset
PATCH /api/data/v9.2/ava_esclusionefilialidadistribuzioneleaset(<guid>)
DELETE /api/data/v9.2/ava_esclusionefilialidadistribuzioneleaset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`ava_esclusionefilialidadistribuzioneleadid`, `ava_esclusionefilialidadistribuzioneleaid`, `ava_filialeid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` | [ava_filiale](ava_filiale.md) | _n/a_ | `ava_EsclusioneFilialidaDistribuzioneLead_ava_Filiale_ava_Filiale` |

## Source

Generated from [ava_esclusionefilialidadistribuzionelea (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_esclusionefilialidadistribuzionelea')) on 2026-05-07.