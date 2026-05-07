---
logical: "backgroundoperation"
display: "Background Operation"
entitySetName: "backgroundoperations"
primaryId: "backgroundoperationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Background Operation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `backgroundoperation` |
| Display name | Background Operation |
| Display (plural) | Background Operations |
| Schema name | `backgroundoperation` |
| Entity set (Web API) | `backgroundoperations` |
| Primary id attribute | `backgroundoperationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/backgroundoperations?$select=name&$top=10
GET /api/data/v9.2/backgroundoperations(<guid>)
POST /api/data/v9.2/backgroundoperations
PATCH /api/data/v9.2/backgroundoperations(<guid>)
DELETE /api/data/v9.2/backgroundoperations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **7**

### Writable

`backgroundoperationid`, `backgroundoperationstatecode`, `backgroundoperationstatuscode`, `displayname`, `endtime`, `errorcode`, `errormessage`, `importsequencenumber`, `inputparameters`, `name`, `outputparameters`, `overriddencreatedon`, `partitionid`, `priority`, `retrycount`, `runas`, `starttime`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_backgroundoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_backgroundoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_backgroundoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_backgroundoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [backgroundoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='backgroundoperation')) on 2026-05-07.