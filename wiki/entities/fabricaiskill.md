---
logical: "fabricaiskill"
display: "Fabric AISkill"
entitySetName: "fabricaiskills"
primaryId: "fabricaiskillid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Fabric AISkill

AISkills published from Fabric.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fabricaiskill` |
| Display name | Fabric AISkill |
| Display (plural) | Fabric AISkill |
| Schema name | `fabricaiskill` |
| Entity set (Web API) | `fabricaiskills` |
| Primary id attribute | `fabricaiskillid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/fabricaiskills?$select=name&$top=10
GET /api/data/v9.2/fabricaiskills(<guid>)
POST /api/data/v9.2/fabricaiskills
PATCH /api/data/v9.2/fabricaiskills(<guid>)
DELETE /api/data/v9.2/fabricaiskills(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`AiPluginOperationId`, `Context`, `CustomApiId`, `Description`, `fabricaiskillId`, `ImportSequenceNumber`, `IsCustomizable`, `Keywords`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Uri`, `UTCConversionTimeZoneCode`, `WorkspaceId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_fabricaiskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `fabricaiskill_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `aipluginoperationid` | `aipluginoperationid` |
| `fabricaiskill_customapiid` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |
| `lk_fabricaiskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fabricaiskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fabricaiskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fabricaiskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_fabricaiskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_fabricaiskill` | [team](team.md) | `owningteam` | `owningteam` |
| `user_fabricaiskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fabricaiskill_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fabricaiskill_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fabricaiskill_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fabricaiskill_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `fabricaiskill_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fabricaiskill_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [fabricaiskill.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fabricaiskill.md) on 2026-05-06.