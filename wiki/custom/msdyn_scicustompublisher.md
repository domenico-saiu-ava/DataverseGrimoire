---
logical: "msdyn_scicustompublisher"
display: "Custom Publisher"
entitySetName: "msdyn_scicustompublishers"
primaryId: "msdyn_scicustompublisherid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Custom Publisher

The publisher of the conversation highlight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scicustompublisher` |
| Display name | Custom Publisher |
| Display (plural) | Custom Publishers |
| Schema name | `msdyn_SciCustomPublisher` |
| Entity set (Web API) | `msdyn_scicustompublishers` |
| Primary id attribute | `msdyn_scicustompublisherid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scicustompublishers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scicustompublishers(<guid>)
POST /api/data/v9.2/msdyn_scicustompublishers
PATCH /api/data/v9.2/msdyn_scicustompublishers(<guid>)
DELETE /api/data/v9.2/msdyn_scicustompublishers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_displayname`, `msdyn_name`, `msdyn_scicustompublisherid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_entityimageid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scicustompublisher_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustompublisher_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustompublisher_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustompublisher_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_scicustompublisher` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_scicustompublisher` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_scicustompublisher` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_scicustompublisher` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyn_SciCustomPublisher_msdyn_EntityImage` | [imagedescriptor](imagedescriptor.md) | `msdyn_entityimageid` | `msdyn_entityimageid_imagedescriptor` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scicustompublisher_SyncErrors` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_DuplicateMatchingRecord` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_DuplicateBaseRecord` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `baserecordid` | `baserecordid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_AsyncOperations` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_MailboxTrackingFolders` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_UserEntityInstanceDatas` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `objectid` | `objectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_ProcessSession` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_BulkDeleteFailures` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `regardingobjectid` | `regardingobjectid_msdyn_scicustompublisher` |
| `msdyn_scicustompublisher_PrincipalObjectAttributeAccesses` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `objectid` | `objectid_msdyn_scicustompublisher` |
| `msdyn_msdyn_scicustomemailhighlight_Publisher_m` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |
| `msdyn_msdyn_scicustomhighlight_Publisher_msdyn_` | [msdyn_scicustompublisher](msdyn_scicustompublisher.md) | `msdyn_publisher` | `msdyn_publisher` |


## Source

Generated from [msdyn_scicustompublisher (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_scicustompublisher')) on 2026-05-07.