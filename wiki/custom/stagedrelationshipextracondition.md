---
logical: "stagedrelationshipextracondition"
display: "Relazione di staging"
entitySetName: "stagedrelationshipextraconditions"
primaryId: "stagedrelationshipextraconditionid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione di staging

Archivia i metadati della relazione di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedrelationshipextracondition` |
| Display name | Relazione di staging |
| Display (plural) | Relazioni di staging |
| Schema name | `StagedRelationshipExtraCondition` |
| Entity set (Web API) | `stagedrelationshipextraconditions` |
| Primary id attribute | `stagedrelationshipextraconditionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedrelationshipextraconditions?$select=name&$top=10
GET /api/data/v9.2/stagedrelationshipextraconditions(<guid>)
POST /api/data/v9.2/stagedrelationshipextraconditions
PATCH /api/data/v9.2/stagedrelationshipextraconditions(<guid>)
DELETE /api/data/v9.2/stagedrelationshipextraconditions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`attributeid`, `componentstate`, `importsequencenumber`, `metadatadescription`, `name`, `overriddencreatedon`, `overwritetime`, `relationshipid`, `solutionid`, `stagedrelationshipextraconditionid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedrelationshipextracondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedrelationshipextracondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedrelationshipextracondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedrelationshipextracondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedrelationshipextracondition_SyncErrors` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `regardingobjectid` | `regardingobjectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_AsyncOperations` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `regardingobjectid` | `regardingobjectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_MailboxTrackingFolders` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `regardingobjectid` | `regardingobjectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_UserEntityInstanceDatas` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `objectid` | `objectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_ProcessSession` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `regardingobjectid` | `regardingobjectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_BulkDeleteFailures` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `regardingobjectid` | `regardingobjectid_stagedrelationshipextracondition` |
| `stagedrelationshipextracondition_PrincipalObjectAttributeAccesses` | [stagedrelationshipextracondition](stagedrelationshipextracondition.md) | `objectid` | `objectid_stagedrelationshipextracondition` |


## Source

Generated from [stagedrelationshipextracondition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedrelationshipextracondition')) on 2026-05-07.