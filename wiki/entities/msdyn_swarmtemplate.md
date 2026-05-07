---
logical: "msdyn_swarmtemplate"
display: "Swarm template"
entitySetName: "msdyn_swarmtemplates"
primaryId: "msdyn_swarmtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm template

Entity which stores different templates for the swarm

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmtemplate` |
| Display name | Swarm template |
| Display (plural) | Swarm templates |
| Schema name | `msdyn_swarmtemplate` |
| Entity set (Web API) | `msdyn_swarmtemplates` |
| Primary id attribute | `msdyn_swarmtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmtemplates(<guid>)
POST /api/data/v9.2/msdyn_swarmtemplates
PATCH /api/data/v9.2/msdyn_swarmtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_swarmtemplates(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_entitytypeid`, `msdyn_isdefault`, `msdyn_name`, `msdyn_numberofexpertsperskill`, `msdyn_skillattachmentrulesetid`, `msdyn_swarmguide`, `msdyn_swarmtemplateId`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarmtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarmtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_entity_msdyn_swarmtemplate_entitytypeid` | [entity](entity.md) | `msdyn_entitytypeid` | `msdyn_entitytypeid` |
| `msdyn_msdyn_decisionruleset_msdyn_swarmtemplate_skillattachmentrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_skillattachmentrulesetid` | `msdyn_skillattachmentrulesetid` |
| `owner_msdyn_swarmtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarmtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarmtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_swarmtemplate_msdyn_swarm_swarmtemplateid` | _n/a_ | `msdyn_swarmtemplateid` | _n/a_ |
| `msdyn_msdyn_swarmtemplate_msdyn_swarmparticipantrule_swarmtemplateid` | _n/a_ | `msdyn_swarmtemplateid` | _n/a_ |
| `msdyn_swarmtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarmtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarmtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarmtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarmtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarmtemplate.md) on 2026-05-06.