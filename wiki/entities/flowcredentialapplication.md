---
logical: "flowcredentialapplication"
display: "Flow Credential Application"
entitySetName: "flowcredentialapplications"
primaryId: "flowcredentialapplicationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Credential Application

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowcredentialapplication` |
| Display name | Flow Credential Application |
| Display (plural) | Flow Credential Applications |
| Schema name | `flowcredentialapplication` |
| Entity set (Web API) | `flowcredentialapplications` |
| Primary id attribute | `flowcredentialapplicationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowcredentialapplications?$select=name&$top=10
GET /api/data/v9.2/flowcredentialapplications(<guid>)
POST /api/data/v9.2/flowcredentialapplications
PATCH /api/data/v9.2/flowcredentialapplications(<guid>)
DELETE /api/data/v9.2/flowcredentialapplications(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`applicationid`, `description`, `flowcredentialapplicationId`, `flowmachinegroupid`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `primarycertificatefile`, `secondarycertificatefile`, `sharingtype`, `statecode`, `statuscode`, `thumbprint`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowcredentialapplication` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowcredentialapplication_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |
| `lk_flowcredentialapplication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowcredentialapplication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowcredentialapplication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowcredentialapplication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowcredentialapplication` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowcredentialapplication` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowcredentialapplication` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcredentialapplication_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcredentialapplication_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcredentialapplication_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowcredentialapplication_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowcredentialapplication_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcredentialapplication_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowcredentialapplication_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcredentialapplication_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowcredentialapplication.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowcredentialapplication.md) on 2026-05-06.