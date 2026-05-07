---
logical: "skill"
display: "Business Skill"
entitySetName: "skills"
primaryId: "skillid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Business Skill

Skill is Dataverse's representation of SKILL.md file. When downloading a skill the name and description should go into the frontmatter and body goes after the frontmatter. A skill can have resources which are in skillresource table. The resources should be downloaded along with main skill entity. When uploading a skill to dataverse upload all its associated resources to the skillresource table. File names and extensions should not be modified.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `skill` |
| Display name | Business Skill |
| Display (plural) | Business Skills |
| Schema name | `Skill` |
| Entity set (Web API) | `skills` |
| Primary id attribute | `skillid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/skills?$select=name&$top=10
GET /api/data/v9.2/skills(<guid>)
POST /api/data/v9.2/skills
PATCH /api/data/v9.2/skills(<guid>)
DELETE /api/data/v9.2/skills(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`body`, `description`, `importsequencenumber`, `iscustomizable`, `ispersonal`, `name`, `overriddencreatedon`, `ownerid`, `skillid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_skill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_skill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_skill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_skill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_skill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_skill` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_skill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_skill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `skill_SyncErrors` | [skill](skill.md) | `regardingobjectid` | `regardingobjectid_skill` |
| `skill_AsyncOperations` | [skill](skill.md) | `regardingobjectid` | `regardingobjectid_skill` |
| `skill_MailboxTrackingFolders` | [skill](skill.md) | `regardingobjectid` | `regardingobjectid_skill` |
| `skill_UserEntityInstanceDatas` | [skill](skill.md) | `objectid` | `objectid_skill` |
| `skill_ProcessSession` | [skill](skill.md) | `regardingobjectid` | `regardingobjectid_skill` |
| `skill_BulkDeleteFailures` | [skill](skill.md) | `regardingobjectid` | `regardingobjectid_skill` |
| `skill_PrincipalObjectAttributeAccesses` | [skill](skill.md) | `objectid` | `objectid_skill` |
| `skill_skillresource` | [skill](skill.md) | `skillid` | `skillid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `skill_dvtablesearch_association` | [dvtablesearch](dvtablesearch.md) | _n/a_ | `skill_dvtablesearch_association` |

## Source

Generated from [skill (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='skill')) on 2026-05-07.