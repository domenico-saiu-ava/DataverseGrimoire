---
logical: "textdatarecordsindexingstatus"
display: "TextDataRecordsIndexingStatus"
entitySetName: "textdatarecordsindexingstatuses"
primaryId: "textdatarecordsindexingstatusid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# TextDataRecordsIndexingStatus

Archivia informazioni sullo stato di indicizzazione dei record di dati non strutturati/di testo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `textdatarecordsindexingstatus` |
| Display name | TextDataRecordsIndexingStatus |
| Display (plural) | TextDataRecordsIndexingStatus |
| Schema name | `textdatarecordsindexingstatus` |
| Entity set (Web API) | `textdatarecordsindexingstatuses` |
| Primary id attribute | `textdatarecordsindexingstatusid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/textdatarecordsindexingstatuses?$select=name&$top=10
GET /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
POST /api/data/v9.2/textdatarecordsindexingstatuses
PATCH /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
DELETE /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **7**

### Writable

`attributename`, `entityname`, `importsequencenumber`, `indexingstatus`, `name`, `objecttypecode`, `overriddencreatedon`, `partitionid`, `recordcreatedonincrm`, `recordid`, `recordmodifiedonincrm`, `recordsizeinbytesincrm`, `recordsizeinbytesintextdataindex`, `recordversionnumber`, `textdataindexname`, `textdatarecordsindexingstatusid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_textdatarecordsindexingstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_textdatarecordsindexingstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_textdatarecordsindexingstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_textdatarecordsindexingstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [textdatarecordsindexingstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='textdatarecordsindexingstatus')) on 2026-05-07.