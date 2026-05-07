---
logical: "sourcecontroloperationstatus"
display: "Source Control Operation Status"
entitySetName: "sourcecontroloperationstatuses"
primaryId: "sourcecontroloperationstatusid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Source Control Operation Status

Stores the status of source control individual operations and their sub-operations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontroloperationstatus` |
| Display name | Source Control Operation Status |
| Display (plural) | Source Control Operations Status |
| Schema name | `SourceControlOperationStatus` |
| Entity set (Web API) | `sourcecontroloperationstatuses` |
| Primary id attribute | `sourcecontroloperationstatusid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontroloperationstatuses?$select=name&$top=10
GET /api/data/v9.2/sourcecontroloperationstatuses(<guid>)
POST /api/data/v9.2/sourcecontroloperationstatuses
PATCH /api/data/v9.2/sourcecontroloperationstatuses(<guid>)
DELETE /api/data/v9.2/sourcecontroloperationstatuses(<guid>)
```

## Attributes

Writable: **19** · Read-only: **7**

### Writable

`asyncoperationid`, `details`, `endtime`, `error`, `errordetails`, `errormessage`, `importsequencenumber`, `name`, `operationname`, `overriddencreatedon`, `partitionid`, `solutionid`, `solutionname`, `sourcecontroloperationstatusid`, `startedby`, `starttime`, `status`, `suboperationname`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontroloperationstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontroloperationstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontroloperationstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontroloperationstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `systemuser_sourcecontroloperationstatus_StartedBy` | [systemuser](systemuser.md) | `startedby` | `StartedBy` |



## Source

Generated from [sourcecontroloperationstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sourcecontroloperationstatus')) on 2026-05-07.